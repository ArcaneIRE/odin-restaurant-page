import './gallery.css';

import pizzaSrc from './top-down-rocket-pizza.jpg';
import winePourSrc from './wine-pour.jpg';
import focacciaSrc from './focaccia-seasoning.jpg';
import leafyCafeSrc from './leafy-cafe.jpg';
import kneadingSrc from './kneading-dough.jpg';

const galleryContent = (() => {
    const gallery = document.createElement('div');
    gallery.classList.add('gallery');

    const pizza = new Image();
    pizza.src = pizzaSrc;
    pizza.classList.add('gallery-landscape');
    gallery.appendChild(pizza);
    
    const focaccia = new Image();
    focaccia.src = focacciaSrc;
    focaccia.classList.add('gallery-portrait');
    gallery.appendChild(focaccia);
    
    const winePour= new Image();
    winePour.src = winePourSrc;
    winePour.classList.add('gallery-portrait');
    gallery.appendChild(winePour);

    const leafyCafe = new Image();
    leafyCafe.src = leafyCafeSrc;
    leafyCafe.classList.add('gallery-landscape');
    gallery.appendChild(leafyCafe);

    const kneading = new Image();
    kneading.src = kneadingSrc;
    kneading.classList.add('gallery-landscape');
    gallery.appendChild(kneading);
    
    return gallery;
})();

export default galleryContent;