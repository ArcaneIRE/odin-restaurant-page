import './menu.css';

function createMenuItem(name, price, ingredients) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item')

    const itemName = document.createElement('h3');
    itemName.classList.add('menu-item-name')
    itemName.textContent = name;
    menuItem.appendChild(itemName);

    const itemPrice = document.createElement('span');
    itemPrice.classList.add('menu-item-price');
    itemPrice.textContent = price;
    menuItem.appendChild(itemPrice);

    const itemBorder = document.createElement('div');
    itemBorder.classList.add('menu-item-border');
    menuItem.appendChild(itemBorder);

    const itemIngredients = document.createElement('p');
    itemIngredients.classList.add('menu-item-ingredients');
    ingredients = ingredients.join(', ');
    ingredients = ingredients.charAt(0).toUpperCase() + ingredients.slice(1);
    ingredients += '.';
    itemIngredients.textContent = ingredients;
    menuItem.appendChild(itemIngredients);
    
    return menuItem;
}

const menuContent = (() => {
    const background = document.createElement('div');
    background.id = 'menu-container';

    const main = document.createElement('main');
    main.id = 'menu-main';
    background.appendChild(main);

    const title = document.createElement('h1');
    title.id = 'menu-title';
    title.classList.add('menu-heading')
    title.textContent = 'Menu';
    main.appendChild(title);

    // Pizza
    const pizzaCategory = document.createElement('h2');
    pizzaCategory.classList.add('menu-heading', 'category')
    pizzaCategory.textContent = 'Pizza';
    main.appendChild(pizzaCategory);

    main.appendChild(createMenuItem('Margherita', '9.50', 
    ['tomato', 'mozzarella', 'extra virgin olive oil', 'basil']));
    main.appendChild(createMenuItem('Prosciutto e Funghi', '10.50', 
    ['tomato', 'mozzarella', 'prosciutto', 'mushroom']));
    main.appendChild(createMenuItem('Cappriciosa', '10.50', 
    ['tomato', 'mozzarella', 'mushroom', 'artichoke', 'ham', 'olives']));
    main.appendChild(createMenuItem('Vegana', '10.50', 
    ['tomato', 'vegan mozzarella', 'artichoke', 'toasted pine nuts', 'rocket',]));
    main.appendChild(createMenuItem('Quattro Formaggi', '11.00', 
    ['tomato', 'mozzarella', 'stracchino', 'fontina', 'gorgonzola']));

    // Sides
    const sidesCategory = document.createElement('h2');
    sidesCategory.classList.add('menu-heading', 'category')
    sidesCategory.textContent = 'Sides';
    main.appendChild(sidesCategory);

    main.appendChild(createMenuItem('Homemade Focaccia', '5.00', 
    ['cherry tomato', 'extra virgin olive oil', 'rosemary', 'crunchy sea salt']));
    main.appendChild(createMenuItem('Homemade Focaccia (Parma Ham)', '6.00', 
    ['cherry tomato', 'Parma ham', 'extra virgin olive oil', 'rosemary', 'crunchy sea salt']));
    main.appendChild(createMenuItem('Caprese Salad', '7.00', 
    ['tomato', 'mozzarella', 'extra virgin olive oil', 'aceto balsamico di modena', 'basil']));

        // Wine
        const wineCategory = document.createElement('h2');
        wineCategory.classList.add('menu-heading', 'category')
        wineCategory.textContent = 'Wine';
        main.appendChild(wineCategory);
        
        const wineText = document.createElement('h3');
        wineText.innerText = 'Wine list available on request';
        wineText.classList.add('menu-text');
        main.appendChild(wineText);
    return background;
})();

export default menuContent;