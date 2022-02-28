let input = document.querySelector("input");
let images = document.querySelector(".images")

function displayUI(value='cat'){
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`,`https://api.unsplash.com/search/photos?query=${value}&client_id=lg_JdDFWDzNiOtt65xYb-5HNO7rwo7UrU2M0gfCO2Bs`);
    xhr.send();
    xhr.onload = () => {
        images.innerHTML = '';
        let response = JSON.parse(xhr.response);
        response.results.forEach(element => {
            let img = document.createElement('img');
            img.src = element.urls.raw;
            images.append(img);
        });

    }
}

function handleInput(event){
    if(event.keyCode == 13 && event.target.value){
        displayUI(event.target.value);
        event.target.value = '';
    }
}

input.addEventListener("keydown",handleInput)

displayUI()