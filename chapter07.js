

// 1. push
// 배열의 맨뒤에 새로운 요소를 추가하는 메서드
    let arr1 = [1,2,3];
        // console.log(arr1)
        arr1.push('새로추가')
        // console.log(arr1)


// 2. pop
// 이 메서드는 배열의 맨 뒤에 있는 요소를 제거,
// 제거한 요소를 반환까지 해준다.
    let arr2 = [1, 2, 3];
    let arr2_pop = arr2.pop()
    // console.log(arr2,'pop메서드로 제거된 후 ')
    // console.log(arr2Pop,'pop메서드로 제거된 요소')

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
let arr3_shift = arr3.shift();
    // console.log(arr3,'shift 메서드로 앞 요소 제거된 후')
    // console.log(arr3_shift, 'shift메서드로 제거된 요소의 반환')

// 4. unshift
// 배열의 맨 앞에 요소를 추가한다,(pop과 비슷!)
let arr4 = [1,2,3]
let arr4_unshift = arr4.unshift('추가!');
// console.log(arr4,'unshift로 요소가 추가된 이후 배열 반환')
// console.log(arr4_unshift,'배열의 길이를 반환')


// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환하는 메서드
let arr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];

let arr5_Slice_1 = arr5.slice(2,4)
    // console.log(arr5_Slice_1,'배열의 2번 index부터 4번index까지 잘라서 새로운 배열을 만들어냈다.')

let arr5_Slice_2 = arr5.slice(8)
    // console.log(arr5_Slice_2,'slice메서드를 쓸때 인수를 1개만쓰면 그인덱스부터 끝 인덱스까지 잘라서 배열을 만든다. ')

let arr5_Slice_3 = arr5.slice(-2)
    // console.log(arr5_Slice_3,'slice메서드를 쓸때 음수를 쓰면 인덱스 뒤부터 잘려서 새로운 배열을 만든다.뒤에서부터 잘라라라는뜻.')

// 6. concat
// 두개의 배열을 이어 붙이는 메서드이다.
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let arr_Concat = arr6.concat(arr7);
    console.log(arr_Concat,'concat메서드로 arr6과 arr7 배열을 붙였다.');