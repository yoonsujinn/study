import { useState, useRef } from "react";

const Register = () => {

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: ""
  })
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    setInput({ //상태변환 함수인 setInput을 호출한다.
      ...input, //스프레드 연산자로 input의 값을 나열해준다.
      [e.target.name]: e.target.value, //키,값 (name.value)값이 useState에 저장된다.
    })
  }

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM요소에 포커스!
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          type="text"
          placeholder={"이름"}
        />
      </div>
      <div>
        <input name="birth" value={input.birth} type="date" onChange={onChange} />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="use">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
}

export default Register;