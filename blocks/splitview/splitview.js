function decorateChildren(block, width, setWidth) {
	const children = [...block.children];

	children.forEach((elem) => {
		const [left, right, blockProps] = elem.querySelectorAll(':scope > div');
		if (setWidth) {
			left.style.width = `${width}%`;
			right.style.width = `${100 - width}%`;
			right.style.minHeight = left.style.minHeight = `100%`;
			right.style.height = left.style.height = `unset`;
		} else {
			left.style.height = left.style.minHeight = `${width}%`;
			right.style.height = right.style.minHeight = `${100 - width}%`;
			left.style.width = right.style.width = `100%`;
		}
		blockProps.style.display = 'none';

		if (block.classList.contains('article')) {
			const [tag, description] = right.querySelectorAll(':scope > *');
			tag.classList.add('tag');
			description.classList.add('description');
		}
	});
}
/**
 *
 * @param {Element} block
 */
export default function decorate(block) {
	const classes = [...block.classList.values()];
	const isNotMobile = `(width > 500px)`;
	const firstWidth = parseInt(
		classes.find((x) => x.startsWith('width-')).split('-')[1],
		10
	);
	decorateChildren(block, firstWidth, window.matchMedia(isNotMobile).matches);

	window.matchMedia(isNotMobile).addEventListener('change', () => {
		decorateChildren(
			block,
			firstWidth,
			window.matchMedia(isNotMobile).matches
		);
	});

	console.log(children);
}
