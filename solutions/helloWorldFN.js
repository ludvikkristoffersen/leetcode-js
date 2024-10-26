// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
function createHelloWorld() {
	return () => {
		return "Hello World";
	};
}

const x = createHelloWorld();
console.log(x());
