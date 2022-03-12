
function main(){
let input = document.querySelector("input");
let todoList = document.querySelector(".todo-list");
BASE_URL = "https://basic-todo-api.vercel.app/api/todo"

let data;

function handleChange(data,method){
    let url = `${BASE_URL}/${data._id}`
    let request_info = method=="PUT"? {
        method,
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "todo": {
                  "title": data.title,
                  "isCompleted": !data.isCompleted
                }
          }) 

    }:{
        method
    }
    console.log(url,request_info)
  fetchData(url,request_info)
}

function createUI(data){
    todoList.innerHTML=""
    data.todos.forEach(d => {
        let div = document.createElement("div");
        let span = document.createElement("span");
        let p = document.createElement("p");
        let checkbox= document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.checked=d.isCompleted
        checkbox.addEventListener("change",() => handleChange(d,"PUT"))
        p.innerHTML = d.title;
        span.innerHTML = "❌"
        span.addEventListener("click",(event) => {
            handleChange(d,"DELETE")
        });
        div.append(checkbox,p,span)
        div.classList.add("flex","todo")
        todoList.append(div)
    })
}

function handleInput(event){
    if(event.keyCode === 13){
        fetchData(BASE_URL,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "todo": {
                    "title": event.target.value,
                    "isCompleted": false
                  }
            }) 
          })
        event.target.value=""
    }
}

function fetchData(url=BASE_URL,headers={}){
   fetch(url,headers).then((data) => data.json()).then((data) => {
       createUI(data)
    })
}

fetchData()

input.addEventListener("keydown",handleInput)

}

main();

