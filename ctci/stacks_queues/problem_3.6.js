//Animal Shelter
//An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in LinkedList data structure.

const Queue = require('../../data_structures/queue/queue.js')

class AnimalShelter {
	constructor() {
		this.dogQueue = new Queue();
		this.catQueue = new Queue();
	}
	enqueue(animal) {
		const newShelterAnimal = {
			animal: animal,
			arrivalTime: new Date()
		}
		if (animal instanceof Dog)
			this.dogQueue.enqueue(newShelterAnimal);
		if (animal instanceof Cat)
			this.catQueue.enqueue(newShelterAnimal);
	}

	dequeueAny() {
		if (this.dogQueue.isEmpty() && this.catQueue.isEmpty())
			throw new Error("Cannot dequeue empty animal shelter");
		if (this.dogQueue.isEmpty())
			return this.catQueue.dequeue();
		if (this.catQueue.isEmpty())
			return this.dogQueue.dequeue();
		return this.dogQueue.peek().arrivalTime < this.catQueue.peek().arrivalTime ? dogQueue.dequeue() : this.catQueue.dequeue();
	}

	dequeueDog() {
		if (this.dogQueue.isEmpty())
			throw new Error("Cannot dequeue: no dogs available");
		return this.dogQueue.dequeue();
	}

	dequeueCat() {
		if (this.catQueue.isEmpty())
			throw new Error("Cannot dequeue: no cats available");
		return this.catQueue.dequeue();
	}
}

class Animal {
	constructor(name) {
		this.name = name;
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
}
class Cat extends Animal {
	constructor(name) {
		super(name);
	}
}

let dog1 = new Dog("d1");
let dog2 = new Dog("d2");
let dog3 = new Dog("d3");
let dog4 = new Dog("d4");

let cat1 = new Cat("c1");
let cat2 = new Cat("c2");
let cat3 = new Cat("c3");
let cat4 = new Cat("c4");

let shelter = new AnimalShelter();

shelter.enqueue(dog1);
shelter.enqueue(dog2);
shelter.enqueue(cat1);
shelter.enqueue(dog3);
shelter.enqueue(cat2);
shelter.enqueue(dog4);
shelter.enqueue(cat3);
shelter.enqueue(cat4);

console.assert(shelter.dequeueAny().name = "dog1");
console.assert(shelter.dequeueCat().name = "cat1");
console.assert(shelter.dequeueAny().name = "dog2");
console.assert(shelter.dequeueAny().name = "dog3");
console.assert(shelter.dequeueDog().name = "dog4");
console.assert(shelter.dequeueAny().name = "cat2");
console.assert(shelter.dequeueAny().name = "cat3");
console.assert(shelter.dequeueAny().name = "cat4");