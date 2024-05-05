const courses = ['Matemáticas', 'Física', 'Historia'];
let grades = JSON.parse(localStorage.getItem('grades')) || [0, 0, 0];

document.addEventListener('DOMContentLoaded', function() {
    const coursesList = document.getElementById('courses-list');
    courses.forEach((course, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${course}: ${grades[index]}`;
        coursesList.appendChild(listItem);
    });
});

function goToHome() {
    window.location.href = '../html/index.html';
}