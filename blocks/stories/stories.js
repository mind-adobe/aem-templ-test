export default function decorate(block) {

    [...block.children].forEach(elem => elem.replaceWith(elem.firstElementChild));
    [...block.children]
    .filter(elem => !!elem && elem.children.length == 3)
    .forEach(
        (elem) => {

            const img = elem.children[0];
            const title = elem.children[1];
            const desc = elem.children[2];

            img.classList.add('stories-card-img');
            title.classList.add('stories-card-title');
            desc.classList.add('stories-card-desc');
            elem.classList.add('stories-card');
        }
    );

    if(block.children.length > 3){
        const viewMore = document.createElement('button');
        viewMore.classList.add('stories-view-more');
        viewMore.textContent = 'View More';
        block.append(viewMore);
    }
    return block;
  }
  