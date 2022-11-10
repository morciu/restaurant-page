import './style.css';
import header from './components/header.js';
import loadHome from './components/home.js';
import loadMenu from './components/menu.js';
import loadContact from './components/contact.js';

console.log("It's alive!");

const home = loadHome();
const menu = loadMenu();
const contact = loadContact();

let currentDisplay = home;

function component() {
    const content = document.createElement("div");
    content.id = "content";

    content.appendChild(header());
    loadContent(content, home);

    

    return content;
};

function switchToHome(parent) {
    if (home != currentDisplay){
        parent.replaceChild(home, currentDisplay);
        currentDisplay = home;
    }
    console.log("clicked home");
};

function switchToMenu(parent) {
    if (menu != currentDisplay) {
        parent.replaceChild(menu, currentDisplay);
        currentDisplay = menu;
    }
    console.log("clicked menu")
};

function switchToContact(parent) {
    if (contact != currentDisplay) {
        parent.replaceChild(contact, currentDisplay);
        currentDisplay = contact;
    }
    console.log("clicked contact")
}

function loadContent(parent, stuffToLoad) {
    parent.appendChild(stuffToLoad);
}

document.body.appendChild(component());

// Set up events for tabs
document.getElementById("home").addEventListener('click', () => {switchToHome(content)});
document.getElementById("menu").addEventListener('click', () => {switchToMenu(content)});
document.getElementById("contact").addEventListener('click', () => {switchToContact(content)});