var listElement = document.querySelector("#app ul") ;
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button")

var todos = [
"fazer café",
"beber gasolina",
"joga lixo no lixo"

];

function renderTodos(){
for(todo of todos){
    console.log(todo);

    }
}

renderTodos();