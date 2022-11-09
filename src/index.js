import './style.css';
import header from './components/header.js';
import contentBody from './components/contentBody.js';

console.log("It's alive!");

function component() {
    const content = document.createElement("div");
    content.id = "content";

    content.appendChild(header());
    content.appendChild(contentBody());

    return content;
};

document.body.appendChild(component());
