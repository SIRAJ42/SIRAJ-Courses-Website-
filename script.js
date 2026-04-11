// Age Limit Prompt

// let age = prompt("What is your age?");

// if (age <= 18) {
//     alert("You are not allowed to open this website");
//     document.body.innerHTML = "<h1 style='text-align:center;margin-top:50px;'>Access Denied</h1>";
// } else {
//     alert("Welcome to the website!");
// }

// Show Courses Cards

function showCourses() {
    const container = document.getElementById("courses");
    container.style.display = "flex";

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 200);
    });
}

function zoomCard(card) {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
}

// Scholarship Popup

// setTimeout(function () {
//     document.getElementById("popup").classList.add("show");
// }, 10000);

// function closePopup() {
//     document.getElementById("popup").classList.remove("show");
// }

// Responsive Menubar

function toggleMenu() {
            document.getElementById("sidebar").classList.toggle("active");
        }