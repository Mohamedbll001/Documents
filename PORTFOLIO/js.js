const buttons = document.querySelectorAll(".tab-btn");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
        const tab = button.dataset.tab;
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
	})
})