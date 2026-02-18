import { useState } from 'react';

function useInput() {    // input값을 받아오는 커스텀 함수를 만들었다.
  const [input, setInput] = useState("");
  //한번 호출될때마다 useState("")가 하나 생성됨
  //새로운 상태저장소가 1개 생성되는것임.
  //호출되면 onChainge가 실행되어 setInput값이 반환된다.
  const onChange = (e) => {
    setInput(e.target.value);
  }
  return [input , onChange];
}

export default useInput;