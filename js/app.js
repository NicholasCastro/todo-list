angular.module("todoApp", [])
.controller("TodoListController", function($scope) {
	var todoList = this;
	todoList.todoItems = [ //Setting default todoList.todoItems
		{ name: "Become a marine biologist", done: false},
		{ name: "Befriend dolphins, the second most intelligent organism", done: false},
		{ name: "Create an army of dolphins", done: false},
		{ name: "Use my army to become supreme dictator of the world", done: false},
	]

	todoList.addTodo = function() { //Function that fires when submit button is clicked
		todoList.todoItems.push( //Adds current input to todoList.todoItems
			{ name: todoList.todoText, done: false }
		)
		todoList.todoText = ""; //Clears form input
	};

	todoList.remove = function() { //Function that fires when remove button is clicked
		var oldTodos = todoList.todoItems; //Storing todoList.todoItems in a variable "oldTodos"
		todoList.todoItems = []; //Setting todoList.todoItmes to none
		angular.forEach(oldTodos, function(todo) { //pushing items from oldTodos that are not done back to todoList.todoItems
			if(!todo.done) todoList.todoItems.push(todo);
		})
		todoList.todoItems
	};

	todoList.remaining = function() {
		var incompleteCount = 0;
		angular.forEach(todoList.todoItems, function(todo) {
			incompleteCount += todo.done ? 0 : 1;
		})

		return incompleteCount
	} 

	todoList.todoTitle = [ //Setting default todoList.todoTitle
		{name: "My Todo List"}
	]
	
	todoList.changeTitle = function() { //Changes todoList.todoTitle to value of todoList.newTitle
		todoList.todoTitle = [{ name: todoList.newTitle }]
	}

});