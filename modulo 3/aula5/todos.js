var listElement = document.querySelector("#app ul") ;
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button")

var todos = [
"fazer café",
"beber gasolina",
"joga lixo no lixo"

];

function renderTodos(){
    listElement.innerHTML =""

for(todo of todos){
   var todoElement = document.createElement('li');
   var todoText = document.createTextNode(todo)
   var linkElement = document.createElement('a')

   var linkText = document.createTextNode('excluir')
   linkElement.appendChild(linkText)
   linkElement.setAttribute('href', '#')

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
   listElement.appendChild(todoElement)

    }
}
renderTodos();


function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText)
    inputElement.value = ' ';
    renderTodos();
}

buttonElement.onclick = addTodo
function deleteTodo(pos) {
todos.splice(pos, 1)
renderTodos();

}