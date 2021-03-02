// Async - Await
const getUsers = async () => {
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
	let data = await response.json();
	return data;
}

// getUsers().then(users => console.log(users));

// Ejemplo para trabajar la data fuera del async-await
getUsers()
	.then(users => {
		console.log(users);
	})
