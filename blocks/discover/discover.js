export default function decorate(block) {
    [...block.children].map(x => x.firstElementChild).filter(elem => !!elem && elem.children.length == 4).forEach(
        (elem) => {

            const img = elem.children[0];
            const title = elem.children[1];
            const desc = elem.children[2];
            const url = elem.children[3];
            
            console.log(elem);

            img.classList.add('discover-card-img');
            title.classList.add('discover-card-title');
            desc.classList.add('discover-card-desc');
            url.classList.add('discover-card-url');
            elem.classList.add('discover-card');
            
        }
    );
    [...block.children].forEach(elem => elem.replaceWith(elem.firstElementChild));
    return block;
  }
  