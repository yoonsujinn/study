
document.addEventListener("DOMContentLoaded",function() {
    let bu1 = document.querySelector('.bu_1')
    let bu2 = document.querySelector('.bu_2')

    const audio_arr =  [
        "./audio_1.mp3",
        "./audio_2.mp3",
        "./audio_3.mp3",
    ]


    const audio_1 = new Audio(audio_arr[0]);
    let trackNum = 0; // 현재 재생중인 음원 번호

 
    bu1.addEventListener('click',function(){
        audio_1.play();
    })

    bu2.addEventListener('click',function() {
        playList();
    })

    function playList() {
        if(audio_arr.length > trackNum) {
            let playMusic = new Audio(audio_arr[trackNum])
            playMusic.play();
            playMusic.onended = () => {
                trackNum++;
                playList()
            }
        }
    }
    
})