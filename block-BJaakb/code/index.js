let input = document.querySelector("input");
let images = document.querySelector(".images")

function fetch(url){
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`,url);
        xhr.onload = () => { resolve(JSON.parse(xhr.response)) }
        xhr.onerror = () => { reject("Something Went Wrong") }
        xhr.send();
    })
}

function displayUI(value='cat'){
    fetch(`https://api.unsplash.com/search/photos?query=${value}&client_id=lg_JdDFWDzNiOtt65xYb-5HNO7rwo7UrU2M0gfCO2Bs`)
    .then(response => {
        images.innerHTML = '';
        response.results.forEach(element => {
            let img = document.createElement('img');
            img.src = element.urls.raw;
            images.append(img);
        });
    })
    .catch(error => {
        console.log(error)
    })
}

function handleInput(event){
    if(event.keyCode == 13 && event.target.value){
        displayUI(event.target.value);
        event.target.value = '';
    }
}

input.addEventListener("keydown",handleInput)

displayUI()