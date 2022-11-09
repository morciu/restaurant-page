import './style.css';
import layout from './layout.js'

console.log("It's alive!");

function component() {
    const content = document.createElement("div");
    content.id = "content";

    const layoutElement = layout();
    content.appendChild(layoutElement);

    return content;
};

document.body.appendChild(component());
