// Get DOM Element
const panels = document.querySelectorAll('.panel');

// creat a Event Listner for Click 
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
});
// creat a Function for Un Active
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}