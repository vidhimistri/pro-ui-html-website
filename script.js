// Simple interaction
document.querySelector(".btn").addEventListener("click", () => {
  alert("Thanks for your interest!");
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    }
);
}
);