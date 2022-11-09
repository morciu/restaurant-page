import header from './header.js';
import contentBody from './contentBody.js';

export default function layout() {
    const element = document.createElement('div');
    element.appendChild(header());
    element.appendChild(contentBody());

    return element;
}