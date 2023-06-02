"use strict";

function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if ("marks" in this) {
		let oldMarksLength = this.marks.length;
		for (let i = 0; i < marks.length; i++) {
			this.marks[oldMarksLength + i] = marks[i];
		}
	}
}

Student.prototype.getAverage = function() {
	if (("marks" in this) && (this.marks.length !== 0)) {
		return this.marks.reduce((sum, current) => sum + current) / this.marks.length;
	} else {
		return 0;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}