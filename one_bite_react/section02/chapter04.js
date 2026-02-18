

// 1. spread 연산자
// -> spread : 흩뿌리다, 펼치다라는 뜻이다.
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
// ---------배열에 spread사용---------
let arr1 = ['arr1_1', 'arr1_2', 'arr1_3']
let arr2 = [4, ...arr1,5, 6]
// console.log(arr1)
// console.log(arr2.'스프레드 연산자로 arr1요소들을 흩뿌려 놓을수 있다.')


// ---------객체에 spread사용 ---------
let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};
// console.log(obj2,'스프레드 연산자로 obj1 객체의 요소들도 obj2객체에 흐트려놓을 수 있음.')


// --------- 함수에 spread 사용---------
function funcA(p1,p2,p3) {
    // console.log('함수에 배열arr1전달  ', p1,p2,p3)
}
funcA(...arr1)

// 2. Rest 매개변수
// 한번에 모든 매개변수들을 배열형태로 받아올 수 있음

    function FuncB(...rest) {
        console.log(rest);
        l
    }
    FuncB(...arr1)