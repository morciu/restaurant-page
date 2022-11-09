export default function tabs() {
    const tabs = document.createElement('div');
    tabs.id = "tabs";

    const homeTab = document.createElement('div');
    homeTab.innerText = "Home";
    const menuTab = document.createElement('div');
    menuTab.innerText = "Menu";
    const contactTab = document.createElement('div');
    contactTab.innerText = "Contact";

    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);

    return tabs;
};