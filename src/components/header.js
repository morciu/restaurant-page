import title from './title.js';
import tabs from './tabs.js';

export default function createHeader() {
    const header = document.createElement("div");
    header.id = "header";

    header.appendChild(title());
    header.appendChild(tabs());

    return header;
}