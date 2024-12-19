const modalForm = document.querySelector("[data-modal]");
const openFormBtn = document.querySelector("[data-modal-open]");
const closeFormBtn = document.querySelector("[data-modal-close]");
const modalSuccess = document.querySelector(".success-modal");
const succesCloseBtn = document.querySelector(".btn-close");
const checkboxInput = document.querySelector(".modal-box__input-check");
const checkBoxIcon = document.querySelector(".modal-box__not-checked");

const toggleModal = () => {
	modalForm.classList.toggle("is-hidden");
};

const toggleSuccess = () => {
	modalSuccess.classList.toggle("is-hidden");
};

openFormBtn.addEventListener("click", toggleModal);
closeFormBtn.addEventListener("click", toggleModal);

modalForm.addEventListener("submit", (event) => {
	if (!checkboxInput.checked) {
		event.preventDefault();
		checkBoxIcon.classList.add("input-error");
		return;
	}

	event.preventDefault();
	toggleModal();
	toggleSuccess();
	checkBoxIcon.classList.remove("input-error");
	event.target.reset();
});

succesCloseBtn.addEventListener("click", toggleSuccess);
