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
    console.log('orderfood 호출됨')
    setTimeout(() => {
        const food = "떡복이"  //orderfood함수에서 food변수를 생성한다.
        callback(food); //전달받은 콜백함수가 호출되면서 food의 값을 인자로 전달한다.
    }, 3000);
}

//음식 식히기
function coldownFoot(food, callback) { //떡볶이가 전달되었다.
    console.log(`${food} - 전달받은 음식 식히기 시작!`)
    setTimeout(() => {
        const cooldwnedFood = `식은 ${food}`
        callback(cooldwnedFood)
    }, 2000);
}
//음식냉동하기
function freezeFood (food, callback) { //식은 떡볶이가 전달 되었다.
    setTimeout(()=> {
        const freezedFood = `냉동된${food}` //냉동된 식은 떡볶이가 되었다.
        callback(freezedFood)
    },1600)
}


orderfood((food)=> { //음식주문
    console.log(food) // 떡볶이가 전달되었다.
        coldownFoot(food, (cooldwnedFood) => { //음식 식힘
            console.log(cooldwnedFood)  //식은 떡볶이가 전달되었다.
                freezeFood(cooldwnedFood, (freezedFood) => { //음식 냉동
                    console.log(freezedFood) //냉동된 식은 떡볶이가 되었다.
                });
        })
})
// 이것은 콜백지옥의 예이다!
// 콜백지옥은 가독성이 안좋아진다!

