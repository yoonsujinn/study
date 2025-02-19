
document.addEventListener("DOMContentLoaded",function() {
    let bu1 = document.querySelector('.bu_1')
    const audio_1 = new Audio("./audio_1.mp3");

    const audio_arr =  [
        "./audio_1.mp3",
        "./audio_2.mp3",
        "./audio_3.mp3",
    ]

    bu1.addEventListener('click',function(){
        audio_1.play();
        console.log('reee')
    })
})