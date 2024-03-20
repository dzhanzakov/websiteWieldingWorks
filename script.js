function scrollToLabel(labelId) {
    if(labelId==="hero"){
        console.log("scrollToUp")
        
        window.scrollTo({
            top: -1000,
            behavior: 'smooth'
    });
    }
    var element = document.getElementById(labelId);
    element.scrollIntoView({behavior: 'smooth'});

    var firstDivs = document.querySelectorAll("[id='mainLi']");
    var secondDivs = document.querySelectorAll("[id='worksLi']");
    
    for(var i = 0; i < firstDivs.length; i++){
        firstDivs[i].classList.remove('active');
        secondDivs[i].classList.add('active');
    } 
  }

function isInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

// Function to handle class swapping
function swapClasses() {
    var firstDiv = document.getElementById('mainLi');
    var secondDiv = document.getElementById('worksLi');

    var hero = document.getElementById('hero');
    var product1 = document.getElementById('product1');

    if (isInViewport(product1)) {
        firstDiv.classList.remove('active');
        secondDiv.classList.add('active');
        console.log("second");
    } else if (isInViewport(hero)) {
        secondDiv.classList.remove('active');
        firstDiv.classList.add('active');
        console.log("first");
    }
}   

// Listen for scroll events
window.addEventListener('scroll', swapClasses);

on