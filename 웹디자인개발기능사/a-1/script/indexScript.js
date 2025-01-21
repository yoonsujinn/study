
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
            let slideImgClon = sliderWrap.firstChild.cloneNode(true)
            slideIndex = 0;
    console.log(slideImgClon)

            setInterval(() => {
                slideIndex++;
                sliderWrap.style.transition = "0.3s"
                sliderWrap.style.marginLeft = slideIndex*(-1200)+"px";
                if (slideImg.length == slideIndex) {
                    slideIndex = 0;
                    sliderWrap.style.marginLeft = "-0px";
                    
                }
            },3000);
    })




