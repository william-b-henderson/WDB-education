
const api_url = "http://localhost:8080/api/";
console.log("script connected.")

var heart_status = 0 // 0 is empty and 1 is filled.

document.getElementById("heart-button").addEventListener("click", () => {
    let heart = document.getElementById("heart-button");
    if (heart_status == 0) {
        heart.src = "static/heart-filled.png";
        heart_status = 1
        // TODO: update the database and mark this image as a favorite image.
        message = {
            date: document.getElementById("apod-date").innerHTML,
            url:  document.getElementById("apod-image").src,
            apod_title: document.getElementById("apod-title").innerHTML,
            paragraph: document.getElementById("apod-p").innerHTML,
        }
        fetch(api_url+'favorite', {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message),
        })
        .then(data => {
            console.log(data.body);
        });
        // console.log(JSON.stringify(current_apod));
    } else {
        heart_status = 0
        heart.src = "static/heart.png"
        // TODO: update the database and un-mark this image as a favorite image.
    }
})

document.getElementById("next-button").addEventListener("click", () => {
    document.getElementById("heart-button").src = "static/heart.png";
    heart_status = 0

    date = document.getElementById("apod-date");
    image = document.getElementById("apod-image");
    apod_title = document.getElementById("apod-title");
    paragraph = document.getElementById("apod-p");

    new_apod = fetch("https://api.nasa.gov/planetary/apod?api_key=JAxeQl5QUt56xrHVgwVrbzh2wlnLp794JWHULUaA&count=1")
    .then(response => response.json())
    .then(result => {
        console.log(result['0']);
        new_apod = result['0'];
        date.innerHTML = new_apod.date;
        image.src = new_apod.hdurl ? new_apod.hdurl : new_apod.url;
        apod_title.innerHTML = new_apod.title;
        paragraph.innerHTML = new_apod.explanation;
    })
    // TODO: Get the image url, title, description, and date from the database using Fetch.
    // you can use let date = document.getElementById("apod-date"); to change the date.
    

    

})