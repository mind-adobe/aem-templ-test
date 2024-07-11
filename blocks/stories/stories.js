const mediaQueries = {
    mobile: `(width <= 500px)`,
    tablet: `(width > 500px) and (width < 800px)`,
    desktop: `(width > 800px )`,
};

const maxElementsPerView = {
    mobile: 3,
    tablet: 2,
    desktop: 3,
};

const setupVisibility = (block) => {
    const currentBreakpoint = (Object.entries(mediaQueries).find(
        (value) => window.matchMedia(value[1]).matches
    ) || ['desktop'])[0];
    console.log(currentBreakpoint);
    const maxElements = maxElementsPerView[currentBreakpoint];
    if (block.children.length > maxElements) {
        [...block.children].forEach((elem, index) => {
            if (index >= maxElements) {
                elem.style.display = 'none';
            } else {
                elem.style.display = '';
            }
        });
    }
};

/**
 *
 * @param {Element} block
 */
export default function decorate(block) {
    [...block.children]
        .map((x) => x.firstElementChild)
        .forEach((elem) => {
            const [img, title, desc, url] = elem.querySelectorAll(':scope > *');
            img.classList.add('stories-card-img');
            title.classList.add('stories-card-title');
            desc.classList.add('stories-card-desc');

            if (url) url.classList.add('stories-url');

            elem.parentElement.classList.add('stories-card');
        });

    if (!block.classList.contains('discover')) {
        setupVisibility(block);
        for (let q of Object.values(mediaQueries))
            window
                .matchMedia(q)
                .addEventListener('change', () => setupVisibility(block));
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
}
