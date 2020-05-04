/////___ABOUT SECTION ANIMATION___/////
(function animeAboutSection() {
    let work = document.querySelector('#work');
    let skills = document.querySelector('.skills');
    let innerSkillBar = document.querySelectorAll('.skills__innerBar');

    let innerSkillBarArr = [...innerSkillBar];
    //create an array of level of competency for each skills.
    let innerSkillBarLvlArr = [...innerSkillBar]
        .map(bar => bar.dataset.level);


    let style = document.createElement('style');

    createAnimationPerSkillsLevel = (lvl) => {
        return `
    @keyframes growFromLeft${lvl}{
      from{
        width: 0;
      }

      to{
        width:${lvl}%;
      }
    }
  `
    }

    style.innerHTML = innerSkillBarLvlArr
        //Remove duplicate first
        // .filter((a,b) => this.indexOf(a) === b)
        //Then create the animation rules.
        .map(lvl => createAnimationPerSkillsLevel(lvl)).join(' ');

    // Get the first script tag
    let ref = document.querySelector('script');

    // Insert our new styles before the first script tag
    ref.parentNode.insertBefore(style, ref);

window.addEventListener('scroll',() => {
  // console.log(work.getBoundingClientRect().y)
  if (skills.getBoundingClientRect().y < window.innerHeight && work.getBoundingClientRect().y > 0) {
    innerSkillBarArr.forEach(bar => bar.style.animation = `growFromLeft${bar.dataset.level} 2s ease-in-out`);
    innerSkillBarArr.forEach(bar => bar.style.animationFillMode = 'forwards');
  } else {
    innerSkillBarArr.forEach(bar => bar.style.animation = ``);
    innerSkillBarArr.forEach(bar => bar.style.animationFillMode = '');
  }
});

})()


/////___PROJECT GROW AND DISPLAY DESCRIPTION WHEN CLICKING ON IT___/////

// (function animateProjectSection() {
let worksProjects = [...document.querySelectorAll('.works__project')];
let buttonCloseModal = document.querySelector('button')

//Flex - Grow the project
worksProjects.map(project => {
  project.querySelector('img').addEventListener('click', (event) => {
      worksProjects.map(project => {
      if (event.target == project.querySelector('img') || event.target == project.querySelector('.works__description')){
        project.classList.add('featuredProject');
      } else {
        project.classList.remove('featuredProject');
      }
    })
  })
  project.querySelector('.project__btnClose').addEventListener('click', () => {
    worksProjects.map(project => {
      project.classList.remove('featuredProject');
    })
  })
})
// }

// let btnSend = document.querySelector('.form__btnSend');
// let flipCardInner = document.querySelector('.flip-card-inner');
// let contactBackface = document.querySelector('.contact__backface');

// btnSend.addEventListener('click', (e) =>{
//   // e.preventDefault();
//   // setTimeout(() => {
//   // flipCardInner.style.transform = 'rotateY(180deg)';
//   contactBackface.style.transform = 'rotateY(0deg) translateY(200px)';
//   // }, 500ms)
// })

