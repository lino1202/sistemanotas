const courses = ['Matemáticas', 'Física', 'Historia'];
let grades = JSON.parse(localStorage.getItem('grades')) || [0, 0, 0];

document.addEventListener('DOMContentLoaded', function() {
    const coursesList = document.getElementById('courses-list');
    courses.forEach((course, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${course}: <input type="number" id="grade-${index}" value="${grades[index]}">
        `;
        coursesList.appendChild(listItem);
    });
});

function saveGrades() {
    const newGrades = [];
    for (let i = 0; i < courses.length; i++) {
        const gradeInput = document.getElementById(`grade-${i}`);
        const grade = parseInt(gradeInput.value);
        newGrades.push(grade);
        gradeInput.disabled = true;
    }
    grades = newGrades;
    localStorage.setItem('grades', JSON.stringify(grades));
    alert('Notas guardadas exitosamente.');
}

function goToHome() {
    window.location.href = 'index.html';
}