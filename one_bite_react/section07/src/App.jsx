import { useState,useEffect,useRef } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/even'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("")
  const isMount = useRef(false);

  //리액트의 LifeCycle
  //1. 마운트 -  탄생
  useEffect(() => {
    console.log("mount : 탄생!")
  },[])
  //2. 업데이트 : 변화,리렌더링
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return; 
      //current값이 false일경우 true로 바꿔준 후 
      //걍제로 return을 당하기 때문에
      //아무런 일이 일어나지 않음. 
    }
    console.log("업뎃!")
    //리렌더링 될때만 업뎃할 수 있다.
  })
  //3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  useEffect(()=>{
  },[count, input])

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input type="text " value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ?<Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
        {/* onClickButton 선언된 함수자체를  Controller 컴포넌트에게 넘긴다. */}
      </section>
    </div>
  )
}

export default App
