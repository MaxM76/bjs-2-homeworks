"use strict";

function parseCount(value) {
	let result = Number.parseFloat(value);
	if (isNaN(result)) {
		throw new TypeError("Невалидное значение");
	} else {
		return result;
	}
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (err) {
		if (err.name == "TypeError") {
			return err;
		} else {
			throw err;
		}
	}
}


class Triangle {
	constructor(aSide, bSide, cSide) {
		if (((aSide + bSide) < cSide) 
			|| ((aSide + cSide) < bSide) 
			|| ((cSide + bSide) < aSide)) {
			throw new RangeError("Треугольник с такими сторонами не существует");
		} else {
			this.aSide = aSide;
			this.bSide = bSide;
			this.cSide = cSide;
		}
	}

	get perimeter() {
		return this.aSide + this.bSide + this.cSide;
	}

	get area() {
		let p = this.perimeter / 2;
		let result = Math.sqrt(p * (p - this.aSide) * (p - this.bSide) * (p - this.cSide));
		return Number(result.toFixed(3));
	}
}

function getTriangle(aSide, bSide, cSide) {
	try {
		return new Triangle(aSide, bSide, cSide);
	} catch (err) {
		if (err.name == "RangeError") {
			return {
				get area() {
					return "Ошибка! Треугольник не существует";
				},
				get perimeter() {
					return "Ошибка! Треугольник не существует";
				}
			};
		} else {
			throw err;
		}
	}
}