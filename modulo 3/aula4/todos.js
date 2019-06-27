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
   var todoElement = document.createElement('li');
   var todotext = document.createTextNode(todo)

   todoElement.appendChild(todotext);
   listElement.appendChild(todoElement)

    }
}



function addTodo(){
    var todotext = inputElement.Value;
    inputElement.value = ' ';
    renderTodos();
}