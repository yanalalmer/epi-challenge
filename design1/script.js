let slideIndex = 1;
const inputs = document.querySelectorAll('input');
const icons = document.querySelectorAll('.icon');
showSlides(slideIndex);

// active icons
const selectIcon = (e) => {
  icons.forEach((icon) => {
    icon.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
};

// next slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

icons.forEach((icon) => {
  icon.addEventListener('click', selectIcon);
});

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('card-slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
// drag card
const card = document.querySelector('.card-container');
const header = card.querySelector('header');

function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(card);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  card.style.left = `${left + movementX}px`;
  card.style.top = `${top + movementY}px`;
}
// drag and drop
header.addEventListener('mousedown', () => {
  header.addEventListener('mousemove', onDrag);
});
document.addEventListener('mouseup', () => {
  header.removeEventListener('mousemove', onDrag);
});
