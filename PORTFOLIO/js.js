const buttons = document.querySelectorAll(".tab-btn");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
        const tab = button.dataset.tab;
        buttons.forEach((btn) => btn.classList.remove("active"));
        document.getElementById("about")
        .classList.remove("active");
        document.getElementById("skills")
        .classList.remove("active");
        document.getElementById("projects")
        .classList.remove("active");
        document.getElementById("resume")
        .classList.remove("active");
        document.getElementById("contact")
        .classList.remove("active");
        document.getElementById(tab)
        .classList.add("active");
        button.classList.add("active");
	})
})