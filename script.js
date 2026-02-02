

const roleText = document.getElementById("roleText");
const roles = ["Software Developer", "Full Stack Developer", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        roleText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 1500);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        roleText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 60);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 400);
    }
}

typeRole();

const skills = document.querySelectorAll(".progress");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
        }
    });
});

skills.forEach(skill => {
    skill.style.animationPlayState = "paused";
    observer.observe(skill);
});
// when click on profile image show text software developer and when click again hide the text  


//this is code is written for contact from validatetion  rule
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let msg = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        msg.innerText = "Please fill all fields ";
        msg.style.color = "red";
    } else {
        msg.innerText = "Message sent successfully ";
        msg.style.color = "green";
        this.reset();
    }
});

//it is the toogle logic for mobile navbar 
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.2 });

reveals.forEach(section => revealObserver.observe(section));
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});
