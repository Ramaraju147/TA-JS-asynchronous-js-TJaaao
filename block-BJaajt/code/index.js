let input = document.querySelector("input");
let user_pic = document.querySelector(".user-pic");
let name = document.querySelector(".name")
let followers_images = document.querySelector(".followers-images")
let following_images = document.querySelector(".following-images")
let button = document.querySelector("button");
let cat_photo = document.querySelector(".cat-photo");


function displayUi(username){
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`,`https://api.github.com/users/${username}`)
    xhr.send()
    let following = new XMLHttpRequest();
    following.open(`GET`,`https://api.github.com/users/${username}/following`)
    following.send()
    let followers = new XMLHttpRequest();
    followers.open(`GET`,`https://api.github.com/users/${username}/followers`)
    followers.send()
    xhr.onload = function(){
        let response = JSON.parse(xhr.response);
        user_pic.setAttribute("src",response.avatar_url)
        name.innerHTML = response.name
    }
    following.onload = () => {
        let response = JSON.parse(following.response).slice(0,5);
        following_images.innerHTML = ""
        response.forEach(res => {
            let img = document.createElement("img");
            img.src = res.avatar_url
            following_images.append(img)
        })
    }
    followers.onload = () => {
        let response = JSON.parse(followers.response).slice(0,5);
        followers_images.innerHTML = ""
        response.forEach(res => {
            let img = document.createElement("img");
            img.src = res.avatar_url
            followers_images.append(img)
        })
    }
}

function displayCat(){
    console.log("hi")
    let cat = new XMLHttpRequest()
    cat.open(`GET`,`https://api.thecatapi.com/v1/images/search`)
    cat.send()
    cat.onload = () => {
        let response = JSON.parse(cat.response);
        cat_photo.src = response[0].url;
    }
}


input.addEventListener("keydown",(event)=>{
    if(event.keyCode == "13"){
        displayUi(event.target.value);
        event.target.value = '';
    }
})

button.addEventListener("click",displayCat)