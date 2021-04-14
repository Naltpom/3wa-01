const fib = (a, b) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([b, a + b]);
		}, 500);
	});


const gen = async (a) => {
	for (let i = 0; i < 10; i++) {
		a = await fib(a[0], a[1])
	}

	return a;
}

gen([0, 1]).then(a => console.log(a));