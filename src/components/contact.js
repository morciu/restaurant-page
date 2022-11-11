export default function loadContact() {
    const element = document.createElement('div');
    element.id = "contentBody";
    
    const itemDiv = document.createElement('div');
    itemDiv.className = "description";

    const itemHeader = document.createElement('div');
    itemHeader.innerText = "Contact";
    itemDiv.appendChild(itemHeader);

    const itemBody = document.createElement('div');
    itemBody.innerText = "Don't call us, we'll call you!";
    itemDiv.appendChild(itemBody);

    element.appendChild(itemDiv);

    return element;
}