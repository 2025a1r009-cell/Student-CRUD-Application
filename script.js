let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

displayStudents();

function addStudent() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if(name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    if(editIndex === -1) {
        students.push({name, age, course});
    } else {
        students[editIndex] = {name, age, course};
        editIndex = -1;
    }

    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";

    displayStudents();
}

function displayStudents() {

    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {

        list.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function editStudent(index) {

    document.getElementById("name").value = students[index].name;
    document.getElementById("age").value = students[index].age;
    document.getElementById("course").value = students[index].course;

    editIndex = index;
}

function deleteStudent(index) {

    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}
