function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    })
    links.forEach(link =>
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        })
    );    
}
menuMobile();



const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        if (index === 0) return
        section.style.opacity = "0";
        section.style.transform = "translateY(60px)";
        section.style.transition = "all 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target
                elem.style.opacity = "1";
                elem.style.transform = "translateY(0px)";
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

observerIntersectionAnimation();

const observerSkillsAnimation = () => {
    const skillLeft = document.getElementById('skill_item-2');
    const skillsRight = document.querySelectorAll('.skill-item-right');
    const skills = document.querySelectorAll('.skills_item');

    const setSkillLeft = () => {
        skillLeft.style.opacity = "0";
        skillLeft.style.transform = "translateX(220px)";
        skillLeft.style.transition = "all 1.6s";
    }
    setSkillLeft();

    skillsRight.forEach(skill => {
        skill.style.opacity = "0";
        skill.style.transform = "translateX(-220px)";
        skill.style.transition = "all 1.6s";
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target
                elem.style.opacity = "1";
                elem.style.transform = "translateX(0px)";
            }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
}

observerSkillsAnimation();