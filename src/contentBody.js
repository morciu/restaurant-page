export default function createContentBody() {
    const content = document.createElement("div");
    content.id = "contentBody";

    const description = document.createElement('div');
    description.className = "description";

    const descritpionHeader = document.createElement('div');
    descritpionHeader.innerText = "Description:";
    description.appendChild(descritpionHeader);

    const descriptionBody = document.createElement('div');
    descriptionBody.innerText = "This here is the best coffee shop in town. Which town you ask? Any town! There is not contest! Our coffee is as black as your deepest darkest fears and as hot as that substitute teacher you had during middle school. If you have a sip of this here coffee and go out that door sleepy we'll give you your... never mind that, that means it's your fault, you have coffee intolerance! Go somewhere else and have a mocha latte fancy pants desert drink and never show your face here again!";
    description.appendChild(descriptionBody);

    content.appendChild(description);

    const timeSchedule = document.createElement('div');
    timeSchedule.className = "description";
    
    const timeScheduleHeader = document.createElement('div');
    timeScheduleHeader.innerText = "Working Hours:";
    timeSchedule.appendChild(timeScheduleHeader);

    const timeScheduleBody = document.createElement('div');
    timeScheduleBody.innerText = "All Hours!!! We don't sleep!!!";
    timeSchedule.appendChild(timeScheduleBody);

    content.appendChild(timeSchedule);

    const location = document.createElement('div');
    location.className = "description";

    const locationHeader = document.createElement('div');
    locationHeader.innerText = "Location:";
    location.appendChild(locationHeader);

    const locationBody = document.createElement('div');
    locationBody.innerText = "Everywhere!!!";
    location.appendChild(locationBody);

    content.appendChild(location);

    return content;
}