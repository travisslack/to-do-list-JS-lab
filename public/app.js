var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  for (var i = 0; i < todos.length; i++) {
    addItem(todos[i])
  }
  // this function needs to:
  // - loop through the array of todos, invoking addItem() for each todo item
}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  var li = document.createElement('li');
  li.innerText = item;
  console.log(li);
  ul.appendChild(li);
  // this function needs to:
  // - create an li element containing the string 'item'
  // - append the li to the "todo-list" ul
}

var handleButtonClick = function () {
  var input = document.querySelector('#new-item');

  addItem(input.value);

  save(input.value);

  input.value = ""

  // this function needs to:
  // - get hold of the input box's value
  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
}

var save = function (newItem) {

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  todosArray.push(newItem);

  var jsonString = JSON.stringify(todosArray);
  localStorage.setItem('todoList', jsonString);


  // this function needs to:
  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  // - stringify the updated array
  // - save it back to localstoage
}

window.addEventListener('load', init);
