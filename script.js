fetch('http://localhost:2000/products')
	.then(response => response.text())
	.then(text => console.log(text));

fetch('http://localhost:2000/user')
	.then(response => response.text())
	.then(text => console.log(text));
