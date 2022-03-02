let select = document.querySelector("select");
let news_feed = document.querySelector(".news-feed");
console.log(news_feed)

function displayUI(data){
    news_feed.innerHTML = ""
    data.forEach( d => {
        let div1 = document.createElement("div");
        div1.classList.add("article")
        let div2 = document.createElement("div");
        div2.classList.add("article-info")
        let img = document.createElement("img");
        img.src= d.imageUrl
        let p = document.createElement("p");
        p.innerHTML = d.newsSite
        let h5 = document.createElement("h5");
        h5.innerHTML = d.title
        let anchor = document.createElement("a")
        anchor.innerHTML = "Read More"
        anchor.href = d.url
        anchor.setAttribute("target","_blank")
        div2.append(p,h5,anchor)
        div1.append(img,div2)
        news_feed.append(div1);
    })
}

function fetchData(){
    let response = fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=30')
    .then((data) => data.json())

    return response
}

function handleChange(event){
    fetchData()
    .then((data) => {
        if(event.target.value){
           let filteredData = data.filter(d => d.newsSite === event.target.value)
           displayUI(filteredData)
        }else{
            displayUI(data);
        }
    })
}

select.addEventListener("change",handleChange)

fetchData().then((data) => displayUI(data))