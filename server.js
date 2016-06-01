var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
<<<<<<< HEAD
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Feed the cat',
=======
	description: 'Go to Market',
	completed: false
}, {
	id: 3,
	description: 'Go home',
>>>>>>> refs/remotes/origin/master
	completed: true
}];

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

<<<<<<< HEAD
// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
=======
// get /todos

app.get('/todos', function( req, res) {
	res.json(todos);
});
// get /todos/2
app.get('/todos/:id', function( req, res) {
	var todoId = parseInt (req.params.id,10);
>>>>>>> refs/remotes/origin/master
	var matchedTodo;

	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			matchedTodo = todo;
		}
<<<<<<< HEAD
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});


app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});
=======

});
	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
	res.status(404).send();
};

	res.send('Asking for todo with id of ' + req.params.id)
});
app.listen(PORT, function () {
	console.log('Express Listening on port ' + PORT + '!');
} );
>>>>>>> refs/remotes/origin/master
