// TIMER
function startTimer(seconds, display) {
    setInterval(() => {
        let h = Math.floor(seconds / 3600);
        let m = Math.floor((seconds % 3600) / 60);
        let s = seconds % 60;

        display.textContent = `${h}h ${m}m ${s}s`;

        seconds--;
        if (seconds < 0) seconds = 0;
    }, 1000);
}

window.onload = () => {
    startTimer(5 * 60 * 60, document.getElementById("timer"));
};

// CONTACT FORM
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
    } else {
        alert(`Thank you, ${name}! Message sent.`);
        e.target.reset();
    }
});

// BACK TO TOP BUTTON
const topBtn = document.getElementById("backToTop");

window.onscroll = () => {
    topBtn.style.display =
        window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};