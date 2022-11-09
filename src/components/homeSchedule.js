export default function homeSchedule() {
    const timeSchedule = document.createElement('div');
    timeSchedule.className = "description";
    
    const timeScheduleHeader = document.createElement('div');
    timeScheduleHeader.innerText = "Working Hours:";
    timeSchedule.appendChild(timeScheduleHeader);

    const timeScheduleBody = document.createElement('div');
    timeScheduleBody.innerText = "All Hours!!! We don't sleep!!!";
    timeSchedule.appendChild(timeScheduleBody);

    return timeSchedule;
};