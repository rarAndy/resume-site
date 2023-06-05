const wrapper = document.querySelector('.wrapper')
const projectContainers = document.querySelectorAll('.project')

projectContainers.forEach((project) => {
    project.addEventListener('click', () => {
        console.log('clicked')
        wrapper.classList.add('active')
        project.querySelector('.project-description').classList.add('active')
    }) 
})

wrapper.addEventListener('click', () => {
    wrapper.classList.remove('active')
    document.querySelectorAll('.project-description').forEach((e) => {
        e.classList.remove('active')
    })
})

