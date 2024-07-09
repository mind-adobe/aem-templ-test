export default function decorate(block) {
	[...block.children]
		.map((x) => x.firstElementChild)
		.filter((elem) => !!elem && elem.children.length === 4)
		.forEach((elem) => {
			const [img, title, desc, url] = elem.children;

			img.classList.add('discover-card-img');
			title.classList.add('discover-card-title');
			desc.classList.add('discover-card-desc');
			url.classList.add('discover-card-url');

			elem.classList.add('discover-card');
		});
	[...block.children].forEach((e) =>
		e.classList.add('discover-card-wrapper')
	);
	return block;
}
