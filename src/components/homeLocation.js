export default function homeLocation() {
    const location = document.createElement('div');
    location.className = "description";

    const locationHeader = document.createElement('div');
    locationHeader.innerText = "Location:";
    location.appendChild(locationHeader);

    const locationBody = document.createElement('div');
    locationBody.innerText = "Everywhere!!!";
    location.appendChild(locationBody);

    return location;
};