"use strict";

class PrintEditionItem {
	#state;
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.#state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.#state * 1.5;
	}

	set state(value) {
		if (value > 100) {
			this.#state = 100;
		} else if (value < 0) {
			this.#state = 0;
		} else {
			this.#state = value;
		}
	}

	get state() {
		return this.#state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		//		if ((book instanceof Book) || (book instanceof Magazine)) {
		if (book instanceof PrintEditionItem) {
			if (book.state > 30) {
				this.books.push(book);
			}
		}
	}

	findBookBy(type, value) {
		console.log(type + " - " + value);
		let result = this.books.find((item) => item[type] === value);
		if (result === undefined) {
			result = null;
		}
		return result;
	}

	giveBookByName(bookName) {
		console.log("giveBookByName - " + bookName);
		let result = this.findBookBy("name", bookName);
		console.log(result);
		if (result !== null) {
			this.books.splice(this.books.indexOf(result), 1);
		}
		return result;
	}
}


class Student {

	constructor(name) {
		this.name = name;
		this.marks = new Object();
	}

	addMark(mark, subject) {
		if ((mark >= 2) && (mark <= 5)) {
			if (this.marks[subject] === undefined) {
				this.marks[subject] = [mark];
			} else {
				this.marks[subject].push(mark);
			}
		}
	}

	getAverageBySubject(subject) {
		if (this.marks[subject] === undefined) {
			return 0;
		} else {
			let marksOfSubject = this.marks[subject];
			return this.marks[subject].reduce((sum, current) => sum + current, 0) / this.marks[subject].length;
		}
	}

	getAverage() {
		let subjects = Object.keys(this.marks);
		if (subjects.length === 0) {
			return 0;
		}
		let sum = 0;
		for (let subject of subjects) {
			sum = sum + this.getAverageBySubject(subject);
		}
		return sum / subjects.length;
	}
}