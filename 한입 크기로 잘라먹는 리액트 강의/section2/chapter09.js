//5가지 배열 변형 메서드

// 1.filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 반환한다.
let arr1 = [
    {name:'수진', hobby:'테니스'},
    {name:'지민', hobby:'테니스'},
    {name:'혜미', hobby:'독서'}
] 
let tennisPeople = arr1.filter (
    (item) => item.hobby === "테니스"
)

// console.log(tennisPeople)

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 결과값들을 모아서 배열로반환한다.
//forEach랑 비슷하지만 결과값을 모아서 반환한다는 점이 다르다!

let arr2= [1,2,3]
let arr2_map = arr2.map((item,idx,arr) => {
    return item*2;
})
// console.log(arr2_map)

//map 메서드로 arr1배열의 name키의 값을 모아서 새로운 배열로 반환하여 찍어보려고한다.
let names = arr1.map((item) => item.name);
// console.log(names)

// 3.sort
// sort는 사전순으로 요소들을 정렬해준다.
let arr3 = ["b","c","a"]
let arr3_1 = [5,3,8,6,4,5]
// console.log(arr3.sort())

// sort에는 매개변수로 조건을 달아줄 수 있다.
// 밑에는 숫자를 오름차순으로 정렬하는 sort메서드이다.

arr3_1.sort((a,b) => {
    if(a>b){
        return 1;
        // b가 a보다 작을 경우에는 b가 앞으로 오라는뜻이다.
    }else if(a<b) {
        return -1;
        // a가 b보다 작을경우애는 a가 앞으로 와라 
    } 
})
// console.log(arr3_1) 
//이렇게 콘솔을 찍어보면 작은 숫자가 앞으로 나와있는것을 알 수 있다.

// 4.toSorted
//sort와 기능은 똑같으나, 정렬된 새로운 배열을 반환한다.
//원본 배열은 원본을 유지한다.

// 5.join메서드
// join은 배열안에 모든 요소를 하나의 문자열로 변형하는 메서드이다.
let arr6 = ['aa','bbb','cccc']
let join1 = arr6.join()
let join2 = arr6.join('')
let join3 = arr6.join('-')
let join4 = arr6.join('+')
console.log(join1,join2,join3,join4)