// ===============================
// AI LEARNING MANAGEMENT SYSTEM
// script.js
// ===============================

// LOGIN FUNCTION
function login() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "student" && pass === "1234") {
        window.location.href = "dashboard.html";
    }
    else if (user === "admin" && pass === "admin123") {
        window.location.href = "admin.html";
    }
    else {
        document.getElementById("msg").innerHTML = "Invalid Username or Password";
    }
}

function logout() {
    window.location.href = "login.html";
}

function enroll(course) {
    alert("Enrolled Successfully in " + course);
}

function sendMessage() {
    alert("Message Sent Successfully!");
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

window.onload = function () {
    let name = localStorage.getItem("name");
    if (document.getElementById("studentName") && name) {
        document.getElementById("studentName").innerHTML = "Welcome, " + name + " 👋";
    }
}


// LOGOUT
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}


// LOAD STUDENT NAME
function loadStudent() {

    let name = localStorage.getItem("name");

    if (name) {
        let student = document.getElementById("studentName");
        if (student) {
            student.innerHTML = "Welcome, " + name + " 👋";
        }
    }

}


// COURSE ENROLL
function enroll(course) {
    alert("Successfully Enrolled in " + course + "!");
}


// CONTACT FORM
function sendMessage() {

    let name = document.getElementById("cname").value;
    let email = document.getElementById("cemail").value;
    let message = document.getElementById("cmessage").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    alert("Thank you " + name + "! Your message has been sent.");

    document.getElementById("cname").value = "";
    document.getElementById("cemail").value = "";
    document.getElementById("cmessage").value = "";
}


// DASHBOARD DATA
function loadDashboard() {

    let attendance = document.getElementById("attendance");
    let grade = document.getElementById("grade");

    if (attendance) {
        attendance.innerHTML = "90%";
    }

    if (grade) {
        grade.innerHTML = "92%";
    }

}


// RUN WHEN PAGE LOADS
window.onload = function () {
    loadStudent();
    loadDashboard();
};