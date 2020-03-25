let skills = document.querySelector('.about__subsection');
let innerSkillBar = document.querySelectorAll('.innerBar');
let img = document.querySelector('img');

let innerSkillBarArr = [...innerSkillBar];
//create an array of level of competency for each skills.
let innerSkillBarLvlArr = innerSkillBarArr.map(bar => bar.dataset.level);


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
  if (skills.getBoundingClientRect().y < window.innerHeight/2) {
    innerSkillBarArr.forEach(bar => bar.style.animation = `growFromLeft${bar.dataset.level} 2s ease-in-out`);
    innerSkillBarArr.forEach(bar => bar.style.animationFillMode = 'forwards');
  }
});