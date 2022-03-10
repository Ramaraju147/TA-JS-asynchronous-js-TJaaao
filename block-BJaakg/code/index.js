let books = document.querySelector(".books");
let popUpContent = document.querySelector(".pop-up-content")
let popUp = document.querySelector(".pop-up")
let cross = document.querySelector(".cross")

cross.addEventListener("click", () => {
    popUp.classList.add("hidden");
})

function handleClick(event,data){
    popUpContent.innerHTML = ""
    popUpContent.classList.add("loader");
    popUp.classList.remove("hidden");
    data.forEach(character => {
        fetch(character).then(charData => charData.json()).then(data => {
            let div = document.createElement("div");
            let p = document.createElement("p");
            console.log(data.name,data.aliases.join(" "))
            p.innerHTML = `${data.name} : (${data.aliases.join(" ")})`
            p.classList.add("char")
            div.append(p)
            popUpContent.append(div)
        }).finally(() => {
            popUpContent.classList.remove("loader");
        })
    })
}

function createUI(){
books.classList.add("loader");
fetch(`https://www.anapioficeandfire.com/api/books`)
.then(data => data.json())
.then(data => {
    books.innerHTML = ''
    console.log(data)
    data.forEach((d) => {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let button = document.createElement("button");
    
        h2.innerHTML = d.name;
        p.innerHTML = d.authors[0];
        button.innerHTML = `Show Characters (${d.characters.length})`
        button.classList.add("btn")
        button.addEventListener("click",(event)=> handleClick(event,d.characters))
        div.append(h2,p,button)
        div.classList.add("book")
        books.append(div)
    })
})
.catch(error => console.log(error))
.finally(() => {
    books.classList.remove("loader")
})
}

createUI();