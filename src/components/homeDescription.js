export default function homeDescription() {
    const description = document.createElement('div');
    description.className = "description";

    const descritpionHeader = document.createElement('div');
    descritpionHeader.innerText = "Description:";
    description.appendChild(descritpionHeader);

    const descriptionBody = document.createElement('div');
    descriptionBody.innerText = "This here is the best coffee shop in town. Which town you ask? Any town! There is not contest! Our coffee is as black as your deepest darkest fears and as hot as that substitute teacher you had during middle school. If you have a sip of this here coffee and go out that door sleepy we'll give you your... never mind that, that means it's your fault, you have coffee intolerance! Go somewhere else and have a mocha latte fancy pants desert drink and never show your face here again!";
    description.appendChild(descriptionBody);

    return description;
};