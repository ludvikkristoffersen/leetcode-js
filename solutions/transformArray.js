// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

function map(arr, fn) {
	const array = [];
	for (let i = 0; i < arr.length; i++) {
		array.push(fn(arr[i], i));
	}
	return array;
}

function plusone(n) {
	return ++n;
}

const testArray = [1, 2, 3];
const newArray = map(testArray, plusone);
console.log(newArray);
