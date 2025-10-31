// === Dynamic Greeting ===
const greeting = document.getElementById("greeting");
const now = new Date();
const hour = now.getHours();
let message = "";

if (hour < 12) message = "Good Morning, Visitors!";
else if (hour < 18) message = "Good Afternoon, Visitors!";
else message = "Good Evening, Visitors!";

greeting.textContent = message;

// === Dark/Light Mode Toggle ===
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// === Form Validation ===
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        alert("Please fill out all fields!");
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
    } else {
        alert("Message sent successfully!");
        form.reset();
    }
});

// === Interactive Projects ===
function toggleProjectDetails(id) {
    const project = document.getElementById(id);
    project.style.display =
        project.style.display === "block" ? "none" : "block";
}

// === Animated Skills Bars ===
window.addEventListener("scroll", () => {
    const skills = document.querySelectorAll(".progress");
    const trigger = window.innerHeight;

    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if (rect.top < trigger) {
            skill.style.width = skill.getAttribute("data-skill") + "%";
        }
    });
});
