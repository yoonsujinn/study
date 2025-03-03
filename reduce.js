
array = [1,2,3,4,5]

// ------------------------------------------------
//배열 전체값을 더하는 프로그램
// let updateAcc = array.reduce((acc,curr,index,array)=> {
    // return acc+curr;
// },0)
// console.log(updateAcc)

// acc - 누적된 결과값 / 필수
// curr - 현재 처리중인 배열의 요소 /필수
// index - 현재 처리중인 요소의 인덱스 / 안써도됨
// array - reduce를 호출한 배열자체
// 메서드 안 return값 - 필수 
// → return이 없으면 acc값이 undefine이 됨
// },0) 초기값임. 0으로 설정해두면 안전하게 동작
// ------------------------------------------------

let numLog = [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]
let answer ='';
let car = numLog.reduce((acc,ele) => opration(acc,ele),0);
//reduce에서 opration 함수를 호출해서 동작을 분리

function opration(acc,ele) {
    
    if(acc + 1 == ele) {
        answer += "w";
    }else if(acc - 1 == ele) {
        answer += 's';
    }else if(acc + 10 == ele) {
        answer += 'd';
    }else if(acc - 10 == ele) {
        answer += 'a';
    }
    return acc = ele; 
    //다음 동작때 이전 배열 요소값이랑 현재요소 값이랑 비교 하려고한다.
    //현재 배열 요소값을 누적값(acc)에 저장해둔다.
};

console.log(answer)
