import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
    // load nav as fragment
    const navMeta = getMetadata('nav');
    const navPath = navMeta
        ? new URL(navMeta, window.location).pathname
        : '/nav';
    const fragment = await loadFragment(navPath);
    console.log(navPath, fragment);
    // decorate nav DOM
    block.textContent = '';
    const nav = document.createElement('nav');
    nav.id = 'nav';
    console.log(fragment);
    while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

    // hamburger for mobile
    const hamburger = document.createElement('div');
    hamburger.classList.add('nav-hamburger');
    hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>
    <span class="nav-hamburger-text">MENU</span>
    `;
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = `
        <div>
          <img src="/icons/logo.svg"/>
        </div>
    `;
    const actions = document.createElement('div');
    actions.innerHTML = `
      <div>
        <img src="/icons/search.svg"/>
        <img src="/icons/globe.svg"/>
        <img src="/icons/person.svg"/>
      </div>
    `;
    actions.classList.add('actions-list');
    nav.firstElementChild.append(logo);
    nav.firstElementChild.firstElementChild.classList.add('left-side');
    nav.firstElementChild.firstElementChild.prepend(hamburger);
    nav.firstElementChild.append(actions);
    nav.setAttribute('aria-expanded', 'false');
    // prevent mobile nav behavior on window resize
    // toggleMenu(nav, navSections, isDesktop.matches);

    const navWrapper = document.createElement('div');
    navWrapper.className = 'nav-wrapper';
    navWrapper.append(nav);
    block.append(navWrapper);
}
