var wrapper = document.querySelector('.wrapper');
var projectContainers = document.querySelectorAll('.project');
var scroller = document.querySelector('.scroller');
projectContainers.forEach(function (project) {
    project.addEventListener('click', function () {
        console.log('clicked');
        wrapper.classList.add('active');
        project.querySelector('.project-description').classList.add('active');
    });
});
wrapper.addEventListener('click', function () {
    wrapper.classList.remove('active');
    document.querySelectorAll('.project-description').forEach(function (e) {
        e.classList.remove('active');
    });
});
document.querySelector('#home-nav').addEventListener('click', function () {
    document.getElementById('top').scrollIntoView({ behavior: "smooth" });
});
document.querySelector('#about-nav').addEventListener('click', function () {
    document.getElementById('about-section').scrollIntoView({ behavior: "smooth" });
});
document.querySelector('#projects-nav').addEventListener('click', function () {
    document.getElementById('projects-section').scrollIntoView({ behavior: "smooth" });
});
document.querySelector('#experience-nav').addEventListener('click', function () {
    document.getElementById('work-experience-section').scrollIntoView({ behavior: "smooth" });
});
document.querySelector('#education-nav').addEventListener('click', function () {
    document.getElementById('education-section').scrollIntoView({ behavior: "smooth" });
});
window.onscroll = function () { scrollToTop(); };
function scrollToTop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scroller.classList.add('active');
        scroller.classList.remove('inactive');
    }
    else {
        if (scroller.classList.contains('active')) {
            scroller.classList.remove('active');
            scroller.classList.add('inactive');
        }
        else {
            scroller.classList.remove('active');
        }
    }
}
document.querySelector('.scroller').addEventListener('click', function () {
    document.getElementById('top').scrollIntoView({ behavior: "smooth" });
});
