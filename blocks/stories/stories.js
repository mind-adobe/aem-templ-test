const breakpoints = {
	mobile: 500,
	tablet: 800,
	desktop: 1200,
};

const setupVisibility = (block) => {
	const maxElementsPerView = {
		mobile: 3,
		tablet: 2,
		desktop: 3,
	};
	const currentBreakpoint =
		Object.keys(breakpoints).find(
			(key) => window.innerWidth < breakpoints[key]
		) || 'desktop';
	const maxElements = maxElementsPerView[currentBreakpoint];
	if (block.children.length > maxElements) {
		[...block.children].forEach((elem, index) => {
			if (index >= maxElements) {
				elem.style.display = 'none';
			} else {
				elem.style.display = '';
			}
		});

		if (
			block.nextSibling &&
			block.nextSibling.classList.contains('stories-view-more')
		)
			return;
		console.log('created');
		const viewMore = document.createElement('button');
		viewMore.classList.add('stories-view-more');
		viewMore.textContent = 'View More';
		if (block.nextSibling) {
			block.parentNode.insertBefore(viewMore, block.nextSibling);
		} else {
			block.parentNode.appendChild(viewMore);
		}
	}
};

export default function decorate(block) {
	[...block.children].forEach((elem) =>
		elem.replaceWith(elem.firstElementChild)
	);
	[...block.children]
		.filter((elem) => !!elem && elem.children.length === 3)
		.forEach((elem) => {
			const img = elem.children[0];
			const title = elem.children[1];
			const desc = elem.children[2];

			img.classList.add('stories-card-img');
			title.classList.add('stories-card-title');
			desc.classList.add('stories-card-desc');
			elem.classList.add('stories-card');
		});
	setupVisibility(block);
	window.addEventListener('resize', () => setupVisibility(block));
	return block;
}
