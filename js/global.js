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