let header = document.getElementById('header-container').style.backgroundColor = 'green';

let emergencyTasks = document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'red';
let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

let emergencyTaskH3 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTaskH3.length; index += 1) {
    emergencyTaskH3[index].style.backgroundColor = 'purple';
};

let noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksH3.length; index += 1) {
    noEmergencyTasksH3[index].style.backgroundColor = 'black';
};

let footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'green';
footer.style.marginTop = '150px';

