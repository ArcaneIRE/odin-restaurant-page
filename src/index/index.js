import './index.css';
import homeContent from '../home/home.js';

// Header
const header = (() => {
    const element = document.createElement('header');

    const nav = document.createElement('nav');
    element.appendChild(nav);
    
    const home = document.createElement('a');
    home.textContent = 'Home';
    home.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(homeContent);
    });
    nav.appendChild(home);

    const menu = document.createElement('a');
    menu.textContent = 'Menu';
    //menu.addEventListener('click', );
    nav.appendChild(menu);
    
    const gallery = document.createElement('a');
    gallery.textContent = 'Gallery';
    //gallery.addEventListener('click', );
    nav.appendChild(gallery);

    const contact = document.createElement('a');
    contact.textContent = 'Contact Us';
    //contact.addEventListener('click', );
    nav.appendChild(contact);

    return element;
})();
document.querySelector('body').appendChild(header);

// Content root
const content = document.createElement('div');
content.id = 'content';
document.querySelector('body').appendChild(content);

// Initialization
content.appendChild(homeContent);
