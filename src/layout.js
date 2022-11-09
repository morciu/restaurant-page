import header from './header.js';
import contentBody from './contentBody.js';

export default function layout() {
    const element = document.createElement('div');
    const header = header();
    const contentBody = contentBody();
    element.appendChild(header);
    element.appendChild(contentBody);

    return element;
}