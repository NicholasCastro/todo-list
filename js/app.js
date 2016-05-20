angular.module("todoApp", []) //Create angular.module
.controller("TodoListController", function($scope) { //set controller name to "TodoListController"
	var todoList = this; //create variable todoList and wires it to this angular module
	todoList.todoItems = [ //Setting default todoList.todoItems
		{ name: "Become a marine biologist", done: false}, //li has value "Become a marine biologist" and class "done:false"
		{ name: "Befriend dolphins, the second most intelligent organism", done: false}, //li has value "Befriend dolphins, the second most intelligent organism" and class "done:false"
		{ name: "Create an army of dolphins", done: false}, //li has value "Create an army of dolphins" and class "done:false"
		{ name: "Use my army to become supreme dictator of the world", done: false}, //li has value "Use my army to become supreme dictator of the world" and class "done:false"
	]

	todoList.addTodo = function() { //Function that fires when list submit button is clicked
		todoList.todoItems.push( //Adds current input to todoList.todoItems
			{ name: todoList.todoText, done: false } //li has value equal to the value of todoList todoText and class "done: false"
		)
		todoList.todoText = ""; //Clears list form input
	};

	todoList.remove = function() { //Function that fires when remove button is clicked
		var oldTodos = todoList.todoItems; //Storing todoList.todoItems in a variable "oldTodos"
		todoList.todoItems = []; //Setting todoList.todoItmes to none
		angular.forEach(oldTodos, function(todo) { //pushing items from oldTodos that are not done back to todoList.todoItems
			if(!todo.done) todoList.todoItems.push(todo); //if the li has the class done: false, return it to todoList.todoItems
		})
		todoList.todoItems //displays todoList.todoItems
	};

	todoList.remaining = function() { //Function that determins the firs display of the remaining count
		var incompleteCount = 0; //Setting default incompleteCount to 0
		angular.forEach(todoList.todoItems, function(todo) { //For each item in todoList.todoItems, perform this function
			incompleteCount += todo.done ? 0 : 1; //decrease incompleteCount by 1 for each item with class done: true
		})

		return incompleteCount //displays new incompleteCount
	} 

	todoList.todoTitle = [ //Setting default todoList.todoTitle
		{name: "My Todo List"} //default title is "My Todo List"
	]
	
	todoList.changeTitle = function() { //Function that fires when title submit button is clicked
		todoList.todoTitle = [] //Removes current title
		todoList.todoTitle.push( //Pushes input of todoList.newTitle to todoList.TodoTitle
			{ name: todoList.newTitle } //Title value becomes value of todoList.newTitle
		);
		todoList.newTitle = ""; //Clears title form input
	}


});