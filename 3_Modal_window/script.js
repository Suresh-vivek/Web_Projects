'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = function () {
  //console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open Modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// close button

btnCloseModal.addEventListener('click', closeModal); //here we are not calling the function as soon as close buttton is clicked the js engine will call the function if we call the function here it will call itselsf as soon as page reloads

// close overlay

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
