import homeDescription from './homeDescription.js';
import homeSchedule from './homeSchedule.js';
import homeLocation from './homeLocation.js';

export default function createContentBody() {
    const content = document.createElement("div");
    content.id = "contentBody";

    content.appendChild(homeDescription());
    content.appendChild(homeSchedule());
    content.appendChild(homeLocation());

    return content;
}