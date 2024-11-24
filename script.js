const studentForm = document.getElementById('student-form');
const studentList = document.getElementById('student-list');

studentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const matricNumber = document.getElementById('matric-number').value;
    const projectTopic = document.getElementById('project-topic').value;

    const newStudent = `${name} (${department}) - ${matricNumber} - ${projectTopic}`;

    const li = document.createElement('li');
    li.textContent = newStudent;

    studentList.appendChild(li);

    studentForm.reset();
});
