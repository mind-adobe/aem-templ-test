/**
 *
 * @param {Element} block
 */
export default function decorate(block) {
	const children = [...block.children];
	children.forEach((elem) => {
		const [left, right, blockProps] = elem.querySelectorAll(':scope > div');
		const firstWidth = parseInt(blockProps.firstElementChild.textContent);

		left.style.width = `${firstWidth}%`;
		right.style.width = `${100 - firstWidth}%`;

		blockProps.style.display = 'none';

		if (block.classList.contains('article')) {
			const [tag, description] = right.querySelectorAll(':scope > *');
			tag.classList.add('tag');
			description.classList.add('description');
		}
	});
	console.log(children);
}
