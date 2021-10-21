const input = document.getElementById("input")
const submit = document.getElementById("submit")
const list = document.getElementById("list")

submit.addEventListener("click", (event) => {
    let text = input.value
    let li = document.createElement("li")
    li.innerHTML = text
    list.appendChild(li)
})