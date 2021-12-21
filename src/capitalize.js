function capitalize(string) {
	let words = string.split(' ');
	const newArray = words.map((item) => {
		return `${item[0].toUpperCase()}${item.slice(1)}`;
	})
	return newArray.join(' ');
}

module.exports = capitalize;
