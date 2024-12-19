const contentContainer = document.querySelector(".content");

const createMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = `
    <h1>Menu</h1>
    <div class="apps">
        <h2>Appetizers</h2>
        <ul>
            <li>Egg Rolls</li>
            <li>Spring Rolls</li>
            <li>Egg Drop Soup</li>
            <li>Miso Soup</li>
            <li>Kimchi</li>
        </ul>
    </div>
    
    <div class="sushi">
        <h2>Sushi</h2>
        <ul>
            <li>Green Dragon Roll</li>
            <li>Caterpillar Roll</li>
            <li>Central Roll</li>
            <li>Volcano Roll</li>
        </ul>
    </div>

    <div class="dessert">
        <h2>Dessert</h2>
        <ul>
            <li>Fried Ice Cream</li>
            <li>Green Tea Ice Cream</li>
        </ul>
    </div>
    `
    contentContainer.appendChild(menu);
}

export { createMenu };