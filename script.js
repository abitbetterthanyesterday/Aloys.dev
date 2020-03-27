//ABOUT SECTION ANIMATION
(function animeAboutSection() {
    let skills = document.querySelector('#about');
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

    window.addEventListener('scroll', () => {
        if (skills.getBoundingClientRect().y < window.innerHeight / 3) {
            console.log('here');
            innerSkillBarArr.forEach(bar => bar.style.animation = `growFromLeft${bar.dataset.level} 2s ease-in-out`);
            innerSkillBarArr.forEach(bar => bar.style.animationFillMode = 'forwards');
        }
    });
})();

//FEATURE SECTION ANIMATION

(function animateFeatureSection(){
let feature = document.querySelector('#feature');
let icon = document.querySelectorAll('.feature__icon');
let title = document.querySelectorAll('.feature__title');
let body = document.querySelectorAll('.feature__body');

window.addEventListener('scroll', () =>{
  if (feature.getBoundingClientRect().y < window.innerHeight / 3){
    icon.forEach(feature => feature.classList.add('animated','fadeInUp', 'fast',));
    title.forEach(feature => feature.classList.add('animated','fadeInUp', 'fast', 'delay-1s'));
    body.forEach(feature => feature.classList.add('animated','fadeInUp', 'fast', 'delay-2s'));
  }
});
})()
