export default function menuItem(name, text, url) {
    const itemDiv = document.createElement('div');
    itemDiv.className = "description";

    const itemHeader = document.createElement('div');
    itemHeader.innerText = name;
    itemDiv.appendChild(itemHeader);

    const itemBody = document.createElement('div');
    itemBody.innerText = text;
    itemDiv.appendChild(itemBody);

    const itemPhoto = document.createElement('img');
    itemPhoto.src = url;
    itemPhoto.width = "80";
    itemPhoto.height = "80";
    itemPhoto.style = "border-radius: 12px";
    itemDiv.append(itemPhoto)

    return itemDiv;
};