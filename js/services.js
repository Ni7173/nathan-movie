const observerElementsAnimation = () => {
    const elements = document.querySelectorAll('.service-container');

    elements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(60px)";
        element.style.transition = "all 1.6s";
    });

    let elementsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target
                elem.style.opacity = "1";
                elem.style.transform = "translateY(0px)";
            }
        });
    });

    elements.forEach(element => {
        elementsObserver.observe(element);
    });
}

observerElementsAnimation();