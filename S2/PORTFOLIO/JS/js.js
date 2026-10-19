const buttons = document.querySelectorAll(".tab-btn");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
        const tab = button.dataset.tab;
        buttons.forEach((btn) => btn.classList.remove("active"));
        const tabContents = document.querySelectorAll(".tab-content");
        tabContents.forEach((content) => content.classList.remove("active"));
        document.getElementById(tab)
        .classList.add("active");
        button.classList.add("active");
	})
})