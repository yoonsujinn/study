const promise = new Promise ((resolve, reject) => {
    //비동기 작업을 실행하는 함수
    //executeor라고 부른다.
    setTimeout(() => {
        const num = 10;
        if(typeof num === 'num') {
            resolve("num이 숫자")
        }else {
            reject("num이 숫자가 아님") 
        }
        console.log('안녕')
        // resolve() 값을 넣어주면 상태가 성공으로 바뀐다.
        // reject() 값을 넣어주면 상태가 실패로 바뀐다.
    //   resolve("안녕성공"); 
    reject("왜 실패했는지 이유...!") 
    },1500)
})

setTimeout(() => {
    console.log(promise)
},3000) 
//[PromiseState]
// : pending - 대기상태
//[PromiseResult]
// : undefined - 결과값이 없는상태를뜻함 (대기상태)
// : resolve -> fulfilled - 성공!
// : reject -> rejected  - 실패!