
document.addEventListener("DOMContentLoaded",function(){
let menuIl = document.querySelectorAll('.headerUl_wrap > ul>li')

    menuIl.forEach(e => {
        e.addEventListener('mouseover',function(){
            // console.log(e.querySlector('.innerUl'))
              e.querySelector('.innerUl').style.height ="164px"
        })
        e.addEventListener('mouseout',function(){
            e.querySelector('.innerUl').style.height="0px"
        })
    })    

    let article_1_button = document.querySelectorAll('.article_1_headerWrap button');
    let contList = document.querySelectorAll('.cont');
        article_1_button.forEach((ele,index) => {
            ele.addEventListener('click',function(){
                article_1_button.forEach(element => {
                    element.classList.remove('on')
                });
                contList.forEach(contEle => {
                    contEle.classList.remove('on')
                });
                ele.classList.add('on')
                    if(index == 0) {
                        contList[0].classList.add('on')
                    }
                if (index == 1) {
                    contList[1].classList.add('on')
                }
                });
        })

            let slideImg = document.querySelectorAll('.sliderWrap .slideImg')
            let sliderWrap = document.querySelector('.sliderWrap')
            slideIndex = 0;
            marginLeftNum = 1200;

            setInterval(() => {
                sliderWrap.style.marginLeft = -marginLeftNum * slideIndex+"px";
                slideIndex++;
                if (slideImg.length+1 == slideIndex) {
                    slideIndex = 0;
                }
            },1000);
    })




