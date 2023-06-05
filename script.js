var wrapper = document.querySelector('.wrapper');
var projectContainers = document.querySelectorAll('.project');
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
