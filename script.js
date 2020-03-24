let skills = document.querySelector('.about__subsection');
let h3 = document.querySelectorAll('.innerBar');


window.addEventListener('scroll',() => {
  if (skills.getBoundingClientRect().y < window.innerHeight/2) {
    h3.forEach(el => el.classList.add('animateBar'));
  }
});