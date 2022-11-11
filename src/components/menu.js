import menuItem from './menuItem.js';

export default function loadMenu() {
    const element = document.createElement('div');
    element.id = "contentBody";
    element.appendChild(menuItem('just coffee', "don't ask for sugar!", "/home/morciu/repos/odinproject/restaurant-page/src/coffeeCup.jpg"));

    return element;
}