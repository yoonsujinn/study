const goodButton = document.querySelectorAll('.goodButton')
const pageWrapLi = document.querySelectorAll('.pageWrap>li')
const slideBtn_dotWrap = document.querySelector('.slideBtn_dotWrap')
const pageIdx = pageWrapLi.length;
const newPageDot = document.createElement('li')

const contentWrap = document.querySelector('.contentWrap')
const leftList = document.querySelectorAll('.contentWrap .leftList')
const rightOnBox = document.querySelector('.rightOnBox')
const topIcons = document.querySelectorAll('.topIcons .icon')
const toprightOnBoxText = document.querySelector('.rightOnBox p')
const spiker = document.querySelector('.spiker')
const playList = [
  new Audio("./mp3/nat02_01_01_01_a_a3_01_1.mp3"),
  new Audio("./mp3/nat02_01_01_01_a_a3_01_2.mp3"),
  new Audio("./mp3/nat02_01_01_01_a_a3_01_3.mp3"),
]

console.log(playList)

document.addEventListener("DOMContentLoaded", function () {

  
  // 음원 재생!!
  spiker.addEventListener('click',function() {
    playList.forEach(element => {
      element.pause();
      audio.currentTime = 0; 
    });
    if(rightOnBox.classList.contains('on2')) {
      playList[1].play()
    }
    if(rightOnBox.classList.contains('on4')) {
      playList[2].play()
    }
    if(rightOnBox.classList.contains('on9')) {
      playList[3].play()
    }

  })
  
  // 좋아요 기능~~~~
  goodButton.forEach(ele => {
    ele.addEventListener('click', () => {
        ele.classList.toggle('on')
    })
  })
  

  // console.log(leftList)

  leftList.forEach((leftListELe,index) => {
    leftListELe.children[0].addEventListener('click', function ()  {
      leftList.forEach(ele=>{ele.classList.remove('on')}) // 클릭하면 모든 li의 on클래스를 지운다
      leftListELe.classList.add('on') //클릭한 요소만 on클래스 붙임
      contentWrap.classList.add('on')
      for (let i = 1; i <= leftList.length; i++) {
        rightOnBox.classList.remove(`on${i}`) //on_숫자 클래스 모두지움
      }
      rightOnBox.classList.add(`on${index+1}`) //클릭한 요소의 인덱스 클래스만 추가함
      for (let i = 1; i <= 7; i++) { //아이콘 type모든 지움
        topIcons[0].classList.remove(`type${i}`)
        topIcons[1].classList.remove(`type${i}`)
      }
      spiker.classList.remove('on')




      if(index + 1 == 1) {  //하단 설명 글 + 아이콘 삽입
          topIcons[0].classList.add(`type1`);
          toprightOnBoxText.innerHTML="그림책을 읽고, ‘계절’에 대해 이야기해요. "
      } else if(index + 1 == 2) {
          topIcons[0].classList.add(`type7`);
          spiker.classList.add('on')
          toprightOnBoxText.innerHTML="좋아하는 계절과 그 까닭을 찾아보고, ‘봄이 가고 여름 오면‘ 노래를 불러 봐요."
      } else if(index + 1 == 3) {
          topIcons[0].classList.add(`type2`);
          toprightOnBoxText.innerHTML="계절을 대표하는 동식물을 관찰하며 계절의 변화를 느껴 봐요."
      } else if(index + 1 == 4) {
          topIcons[0].classList.add(`type7`);
          topIcons[1].classList.add(`type5`);
          spiker.classList.add('on')
          toprightOnBoxText.innerHTML="‘가을이 오는 소리‘ 노래를 부르며, 자연의 소리를 느껴 봐요."
      } else if(index + 1 == 5) {
          toprightOnBoxText.innerHTML="계절과 날씨에 어울리는 옷차림을 알아봐요."
      } else if(index + 1 == 6) {
          topIcons[0].classList.add(`type6`);
          toprightOnBoxText.innerHTML="계절에 어울리는 색을 골라 사계절을 표현해요."
      } else if(index + 1 == 7) {
          topIcons[0].classList.add(`type6`);
          toprightOnBoxText.innerHTML="좋아하는 계절의 풍경을 다양한 방법으로 나타내 봐요."
      } else if(index + 1 == 8) {
          topIcons[0].classList.add(`type3`);
          toprightOnBoxText.innerHTML="우리 주변의 자연물을 이용해 다양한 놀이를 해 봐요."
      } else if(index + 1 == 9) {
          topIcons[0].classList.add(`type7`);
          spiker.classList.add('on')
          toprightOnBoxText.innerHTML="‘잠자리 꽁꽁‘ 노래를 부르며 가을의 시작을 맞이해요."
      } else if(index + 1 == 10) {
          toprightOnBoxText.innerHTML="24절기를 조사하며 계절의 변화를 알아봐요."
      } else if(index + 1 == 11) {
          toprightOnBoxText.innerHTML="계절별 식재료와 음식을 알아봐요."
      } else if(index + 1 == 12) {
          topIcons[0].classList.add(`type6`);
          topIcons[1].classList.add(`type5`);
          toprightOnBoxText.innerHTML="다양한 열매를 관찰하고, 열매의 모습을 그려 봐요."
      } else if(index + 1 == 13) {
          toprightOnBoxText.innerHTML="계절이 담긴 그림을 보며 아름다움을 느껴 보고, 열매 얼굴을 꾸며 직접 표현해 봐요."
      } else if(index + 1 == 14) {
          toprightOnBoxText.innerHTML="계절마다 학교에서는 어떤 활동을 하는지 떠올려 봐요."
      } else if(index + 1 == 15) {
          topIcons[0].classList.add(`type7`);
          spiker.classList.add('on')
          toprightOnBoxText.innerHTML="‘가을 길‘ 노래를 부르고, 노랫말에 어울리는 동작을 만들어 표현해 봐요."
      } else if(index + 1 == 16) {
          topIcons[0].classList.add(`type6`);
          toprightOnBoxText.innerHTML="계절과 장소에 따라 사람들이 하는 일을 알아보고,내가 사는 곳의 모습을 그림으로 표현해 봐요."
      } else if(index + 1 == 17) {
          topIcons[0].classList.add(`type2`);
          toprightOnBoxText.innerHTML="계절에 따라 사용하는 물건이 어떻게 달라지는지 알아봐요."
      } else if(index + 1 == 18) {
          toprightOnBoxText.innerHTML="나들이 계획을 세우고, 나들이를 하며 계절의 소중함을 느껴 봐요."
      } else if(index + 1 == 19) {
          topIcons[0].classList.add(`type2`);
          toprightOnBoxText.innerHTML="우리나라 사계절 날씨의 특징을 알아보고, 일기 예보 놀이를 해요."
        } else if(index + 1 == 20) {
          topIcons[0].classList.add(`type5`);
          toprightOnBoxText.innerHTML="계절을 담아 교실을 꾸미며 계절의 아름다움을 느껴 봐요."
      }
    })
  });


  // 슬라이드 도트생성 //페이지의 갯수를 세서 페이지갯수 만큼 슬라이드 도트li를 추가한다.
  // for (let index = 0; index < pageIdx; index++) {
  //   slideBtn_dotWrap.appendChild(newPageDot.cloneNode(true))
  // }
  //   slideBtn_dotWrap.children[0].classList.add('on') //맨앞li에 on클래스를 추가한다.

  //   console.log([...pageLi]);
    
  //   pageLi.forEach(ele => {
  //     console.log('ele')
  //   });
  //   // console.log()
  // // 이전,다음버튼 on / off
  // // slideBtn_dotWrap.children.forEach((ele,index)=> {
  //   // if(ele.classList.contains('on') {
  //   //     co
  //   // }
  // // })






});
