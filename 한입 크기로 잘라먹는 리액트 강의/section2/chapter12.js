// function add(a, b, callback) {
//     setTimeout(() => {
//         const sum = a+b;
//         callback(sum)
//         // console.log(sum)
//     },1000)
// }

// add(1,2,(value) => {
//     console.log(value)
// });
// ========================================

// 음식 주문!!
function orderfood(callback) {
    console.log('주문받음')
    setTimeout(() => {
        const food = "떡복이"
        callback(food);
    }, 3000);
}

//음식 식히기
function coldownFoot(food, callback) {
    console.log(`${food} 음식 식히기 시작!`)
    setTimeout(() => {
        const cooldwnedFood = `식은 ${food}`
        callback(cooldwnedFood)
    }, 2000);
}
//음식냉동하기
function freezeFood (food, callback) {
    setTimeout(()=> {
        const freezedFood = `냉동된${food}`
        callback(freezedFood)
    },1600)
}


orderfood((food)=> {
    //음식주문
    console.log(food)
        //음식 식힘
        coldownFoot(food, (cooldwnedFood) => {
            console.log(cooldwnedFood)
                //음식냉동
                freezeFood(cooldwnedFood, (freezedFood) => {
                    console.log(freezedFood)
                });
        })
})
// 이것은 콜백지옥의 예이다!
// 콜백지옥은 가독성이 안좋아진다!

