function tabsFilter() {
    const tabs = document.querySelectorAll('.projects-category-selector-grid a ');
    const projets = document.querySelectorAll('.project-card');

    const resetActiveLinks = () => {
        tabs.forEach (elem => {
            elem.classList.remove('active');
        });
    }

    const showProjets = (elem) => {
        projets.forEach(projet => {
            let filter = projet.getAttribute('data-category');
            if (elem === 'all') {
                projet.parentNode.classList.remove('hide');
                return
            }
            filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');
        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjets(filter);
            resetActiveLinks(elem);
            elem.classList.add('active');
        })
    });
    }
tabsFilter();


function showProjectDetails() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');
    
    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        })
    }


    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show')
        });
    });

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            hideModals();
        });
    });
}

showProjectDetails();


/* page projets: alternance projets photo/video */


const projectTypeSelector = () => {
    const tabsType = document.querySelectorAll('.projects-type-selector-grid .selector-btn');
    const photoBtn = document.getElementById('photo-btn');
    const videoBtn = document.getElementById('video-btn');
    const photoGrid = document.querySelector('.photo-projects-grid');
    const videoGrid = document.querySelector('.video-projects-grid');
    const btnsType = document.querySelectorAll('.projects-type-selector-grid .selector-btn')

    const resetActiveLinks = () => {
        tabsType.forEach (elem => {
            elem.classList.remove('active');
        });
    }

    tabsType.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            resetActiveLinks(elem);
            elem.classList.add('active');
        })
    });

    const setUpPhotoGrid = () => {
        if (photoBtn.classList.contains('active')) {
        videoGrid.classList.add('hide-grid');
        videoGrid.classList.remove('show-grid');
        }
        photoGrid.classList.remove('hide-grid');
        photoGrid.classList.add('show-grid');
    }

    const setUpVideoGrid = () => {
        if (videoBtn.classList.contains('active')) {
        photoGrid.classList.add('hide-grid');
        photoGrid.classList.remove('show-grid');
        }
        videoGrid.classList.remove('hide-grid');   
        videoGrid.classList.add('show-grid');
    }


    const gridSetting = () => {
        photoBtn.addEventListener('click', (event) => {
            event.preventDefault();
            setUpPhotoGrid();
        })    
    
        videoBtn.addEventListener('click', (event) => {
            event.preventDefault();
            setUpVideoGrid();
        }) 
    }
    gridSetting();
              
}
projectTypeSelector();