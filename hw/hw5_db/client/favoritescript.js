(() => {
    const api_url = "http://localhost:8080/api/";
    // makeAPOD is used to create a APOD node in the following format:
    // <div class="apod">
    //     <small id="apod-date"> 02-21-2021 </small>
    //     <img id="apod-image" width="200px" src="https://apod.nasa.gov/apod/image/2102/rosette_goldman_960.jpg" alt="">
    // </div>
    const makeAPOD = (url, date) => {
        var div = document.createElement("div");
        div.className = "apod";
        var small = document.createElement("small");
        small.id = "apod-date";
        small.innerText = date;
        var img = document.createElement("img");
        img.src = url;
        img.style.width = "200px"
        div.appendChild(small);
        div.appendChild(img);
        return div
    }

    // TODO: Fetch a list of APODs from the database.
    // Here the apods are filled with dummy data.
    apods = fetch(api_url+'all')
    .then(response => response.json())
    .then(result => result['apods'])
    .then(apods => {
        var al = document.getElementById("apod-list");
        for (apod of apods) {
            console.log(apod);
            al.appendChild(makeAPOD(apod['url'], apod['date']))
        }
    })
    
    // for (apod of apods) {
    //     console.log(apod)
    //     al.appendChild(makeAPOD(apod[0], apod[1]))
    // }
})()