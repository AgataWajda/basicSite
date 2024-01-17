const modalForm = document.querySelector("[data-modal]");
const openFormBtn = document.querySelector("[data-modal-open]");
const closeFormBtn = document.querySelector("[data-modal-close]");
const modalSuccess = document.querySelector(".success-modal");
const succesCloseBtn = document.querySelector(".btn-close");

const toggleModal = () => {
	modalForm.classList.toggle("is-hidden");
};

const toggleSuccess = () => {
	modalSuccess.classList.toggle("is-hidden");
};

openFormBtn.addEventListener("click", toggleModal);
closeFormBtn.addEventListener("click", toggleModal);

modalForm.addEventListener("submit", (event) => {
	event.preventDefault();
	toggleModal();
	toggleSuccess();
	event.target.reset();
});

succesCloseBtn.addEventListener("click", toggleSuccess);
