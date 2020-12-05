
let i = 0;
// setTimeout(() => {

//     document.querySelector('.slider').style.transform = `scale(-${i})`;
//     i+=.1;
//     console.log(i)
// }, 1000);

document.querySelectorAll('.slider__img').forEach(element => {
    
});

function showSlide(slide) {
    let margin = 0;
    const transformConstant = (slide ) * 100;
    margin += transformConstant;
    if(margin > 300){
        margin = 300;
    }
    else if(margin < 0){
        margin = 0
    }

    document.querySelectorAll('.slider__item').forEach(el => {
        el.style.transform = `translateX(-${margin}%)`;
    });

    showCurrentDot(slide);
}

function showCurrentDot(slide) {
    document.querySelectorAll('.dots').forEach((element, index) => {
        if(index === slide){
            element.classList.add('dots__active');
        }else{
            element.classList.remove('dots__active');
        }

    });
}

document.querySelectorAll('.dots').forEach((el, index) => {
    el.addEventListener('click', e => {
        e.preventDefault();
        showSlide(index);
    });
});