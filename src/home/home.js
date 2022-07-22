import './home.css';

// Home content
const homeContent = (() => {
    const background = document.createElement('div');
    background.id = 'home-container';

    const main = document.createElement('main');
    main.id = 'home-main';
    background.appendChild(main);
    
    const title = document.createElement('h1');
    title.textContent = "dall'inferno";
    main.appendChild(title);
    
    return background;
})();

export default homeContent;