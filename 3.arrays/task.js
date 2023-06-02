function compareArrays(arr1, arr2) {
	let result = false;
	if (arr1.length === arr2.length) {
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) {
				return result;
			}
		}
		result = true;
	}
	return result;
}

function getUsersNamesInAgeRange(users, gender) {
	return users
		.filter((user) => user.gender === gender)
		.map((user) => user.age)
		.reduce((avr, age, index, ages) => (ages.length === 0) ? 0 : avr + age / ages.length, 0);
}