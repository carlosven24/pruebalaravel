const nextButton = document.querySelector('.rightMobile');
const prevButton = document.querySelector('.leftMobile');


let currentSlide = 1;
let prevSlide = 3;
let nexSlide = 2;

nextButton.addEventListener('click', () => {
    
    currentSlide++;
    prevSlide = currentSlide - 1;
    nexSlide = currentSlide + 1;


    if(nexSlide > 3){
        nexSlide = 2;
    }

    if(currentSlide > 3){
        currentSlide = 1;
    }

    document.querySelector('#slide_' + currentSlide).classList.remove('noDisplay');
    document.querySelector('#slide_' + prevSlide).classList.add('noDisplay');
    document.querySelector('#slide_' + nexSlide).classList.add('noDisplay');
   
})


prevButton.addEventListener('click', () => {
    
    currentSlide--;
    prevSlide = currentSlide - 1;
    nexSlide = currentSlide + 1;


    if(currentSlide <= 0){
        currentSlide = 3;
    }

    if(currentSlide == 3){
        prevSlide = 2;
    }

    if(prevSlide <= 0){
        prevSlide = 3;
    }

 
    document.querySelector('#slide_' + currentSlide).classList.remove('noDisplay');
    document.querySelector('#slide_' + prevSlide).classList.add('noDisplay');
    document.querySelector('#slide_' + nexSlide).classList.add('noDisplay');
   
})

