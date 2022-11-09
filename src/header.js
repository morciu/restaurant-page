export default function createHeader() {
    const header = document.createElement("div");
    header.id = "header";

    const title = document.createElement('div');
    title.id = "title";
    title.innerText = "Kickass Coffee Shop";

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

    header.appendChild(title);
    header.appendChild(tabs);

    return header;
}