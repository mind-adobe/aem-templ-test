/**
 *
 * @param {Element} block
 */
export default function decorate(block) {
	const cards = [...block.children];
	cards.forEach((x) => {
		const [title, category, date] = x.querySelectorAll(':scope > div > *');

		title.classList.add('title-news-card');
		category.classList.add('category-news-card');
		date.classList.add('date-news-card');

		console.log(title, category, date);
	});
}
