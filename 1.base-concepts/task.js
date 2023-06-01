"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let D = b ** 2 - 4 * a * c;
	if (D === 0) {
		arr[0] = (-b / (2 * a));
	} else if (D > 0) {
		arr[0] = (-b + Math.sqrt(D)) / (2 * a);
		arr[1] = (-b - Math.sqrt(D)) / (2 * a);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = parseFloat(percent) / 100 / 12;
	contribution = parseFloat(contribution);
	amount = parseFloat(amount);
	countMonths = parseInt(countMonths);
	let body = amount - contribution;
	let monthlyPayment = body * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	let result = countMonths * monthlyPayment;
	result = parseFloat(result.toFixed(2));
	return result;
}