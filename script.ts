const wrapper = document.querySelector('.wrapper')
const projectContainers = document.querySelectorAll('.project')
const scroller = document.querySelector('.scroller')
const closeIcons = document.querySelectorAll('.close-icon')

projectContainers.forEach((project) => {
    project.addEventListener('click', () => {
        wrapper.classList.add('active')
        project.querySelector('.project-description').classList.add('active')
    }) 
})

closeIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        wrapper.classList.remove('active')
        document.querySelectorAll('.project-description').forEach((e) => {
            e.classList.remove('active')
        })
    })
})

wrapper.addEventListener('click', () => {
    wrapper.classList.remove('active')
    document.querySelectorAll('.project-description').forEach((e) => {
        e.classList.remove('active')
    })
})

document.querySelector('#home-nav').addEventListener('click', () => {
    document.getElementById('top').scrollIntoView({behavior: "smooth"})
})

document.querySelector('#about-nav').addEventListener('click', function () {
    document.getElementById('about-section').scrollIntoView({ behavior: "smooth" });
});

document.querySelector('#projects-nav').addEventListener('click', function () {
    document.getElementById('projects-section').scrollIntoView({ behavior: "smooth" });
});

window.onscroll = function() {scrollToTop()};

function scrollToTop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scroller.classList.add('active');
        scroller.classList.remove('inactive');
    } else {
        if (scroller.classList.contains('active')) {
            scroller.classList.remove('active');
            scroller.classList.add('inactive');
        } else {
            scroller.classList.remove('active')
        }  
    }
}

document.querySelector('.scroller').addEventListener('click', () => {
    document.getElementById('top').scrollIntoView({behavior: "smooth"})
});
