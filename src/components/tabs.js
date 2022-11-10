export default function tabs() {
    const tabs = document.createElement('div');
    tabs.id = "tabs";

    const homeTab = document.createElement('div');
    homeTab.id = "home"
    homeTab.innerText = "Home";
    const menuTab = document.createElement('div');
    menuTab.id = "menu"
    menuTab.innerText = "Menu";
    const contactTab = document.createElement('div');
    contactTab.id = "contact";
    contactTab.innerText = "Contact";

    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);

    return tabs;
};