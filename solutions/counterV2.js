// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

function createCounter(init) {
	let initialValue = init;
	return (object = {
		increment: () => {
			return ++init;
		},
		decrement: () => {
			return --init;
		},
		reset: () => {
			init = initialValue;
			return init;
		},
	});
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
