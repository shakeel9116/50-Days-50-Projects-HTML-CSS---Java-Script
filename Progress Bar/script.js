// Get DOM Elements
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles= document.querySelectorAll('.circle');

//  Index to represent Active class
let currentActive = 1


// Creat Event Listner for Next Button
next.addEventListener('click', () => {
    currentActive++

     // currentActive should not Excess 4
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    Update()
});

// Creat Event Listner for Prev Button
prev.addEventListener('click', () => {
    currentActive--
    
    // CurrentActive should not be less than 1
    if(currentActive < 1) {
        currentActive = 1
    }

    Update();

});

// Creat a Update Function
function Update() {
    circles.forEach((circle, inx) => {
        if(inx < currentActive) {
        circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })
     
    // Get all the active circles
    const actives = document.querySelectorAll('.active')

    // Update Progress Bar
    progress.style.width=(actives.length -1)/ (circles.length
    -1) * 100 + '%'

    // Active or Disable PREV & NEXT 
    if(currentActive == 1){
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}