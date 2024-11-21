export const debounce = <A extends any[], T>(
	func: (...args: A) => T,
	timeout = 200
): ((...args: A) => void) => {
	let timer: ReturnType<typeof setTimeout>;
	return function (this: unknown, ...args: A) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
};
