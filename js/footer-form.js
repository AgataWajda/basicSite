const footerForm = document.querySelector(".footer-box__form");
const footerInfo = document.querySelector(".footer-box__info");

footerForm.addEventListener("submit", (event) => {
	event.preventDefault();
	footerInfo.classList.toggle("is-hidden");
	event.target.reset();
	setTimeout(() => {
		footerInfo.classList.toggle("is-hidden");
	}, 2000);
});
