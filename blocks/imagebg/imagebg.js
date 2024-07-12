/**
 *
 * @param {Element} block
 */
export default function decorate(block) {
    try {
        const [bg, fg] = block.querySelectorAll(':scope > div > *');
        bg.classList.add('bg');
        fg.classList.add('imagebg-content');
        bg.remove();
        block.firstElementChild.append(bg);
    } catch (e) {
        console.error('Imagebg block is missing the required structure');
    }
}
