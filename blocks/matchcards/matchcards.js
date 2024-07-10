/**
 *
 * @param {Element} block
 */
export default function decorate(block) {
	const children = [...block.children];
	children.forEach((card) => {
		const [tag, date, logo1, logo2, team1, team2, time, extraText, color] =
			card.querySelectorAll(':scope > div > *');

		color.style.display = 'none';
		tag.classList.add('tag');
		tag.style.color = color.textContent;
		date.classList.add('date');
		logo1.classList.add('logo1');
		logo2.classList.add('logo2');
		logo2.outerHTML += `</br>`;

		team1.classList.add('team-name');
		team2.classList.add('team-name');

		team1.outerHTML += `<div class="vs-team"> VS </div>`;
		team2.outerHTML += `</br>`;
		time.classList.add('time');

		extraText.classList.add('extra-text');
		extraText.style.color = color.textContent;
	});
}
