
// 1.forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 =  [1,2,3];

arr1.forEach(function(item,idx,arr){
    // console.log(item*2)
})

// 2.includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,3,4]
let isIncludes = arr2.includes(3) //arr2배열에 3이 있기 떄문에 isIncludes는 true값이다.
// console.log(isIncludes)

// 3.indexOf
// 특정 요소의 인덱스를 찾아서 반환하는 요소이다.
// 배열에 찾으려는 요소가 여러개 있을 경우에는 맨앞에 요소만 반환하게 된다.
// 만약에 존재하지 않는값을 찾는다면 -1가 출력된다
let arr3=[1,2,3]
let indexof = arr3.indexOf(2) //2는 인덱스[1]에 위치하기떄문에 1이 출력된다.
// console.log(indexof)

// 4.findIndex
// findIndex는 모든 요소를 순회하면서 콜백함수를 만족시키는 요소의 인덱스를 반환한다.
// 객체타입의 배열에서 요소를 찾을때 더 유용하게 사용할 수 있다.

let arr4 =[1,2,3,2];
    let findindexx = arr4.findIndex((item) => {
        if(item == 2) return true;
    })
// console.log(findindexx)

let objectArr = [
    {name : '수진'},
    {name : '찬주'}
];
    let fineindex2= objectArr.findIndex((item) =>
    item.name === '찬주'
    )
// console.log(fineindex2)


// 5. find()
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는다.
// 콜백함수를 만족하는 요소를 찾으면 요소를 그대로 반환한다.

let objectArr2 = [
    {age: 27},
    {age: 28},
    {age: 29},
    {age: 30}
]
let find = objectArr2.find((item) => item.age ===29)
console.log(find)