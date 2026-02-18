import './App.css'
import List from './compornents/List'
import Header from './compornents/Header'
import Editor from './compornents/Editor'
import { useState, useRef } from "react";

const mockDate = [
  {
    id: 0,
    isDone: false,
    content: "react공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래연습하기",
    date: new Date().getTime(),
  }
]

function App() {

  const [todos, setTodos] = useState(mockDate);
  const idRef = useRef(3)

  //content라는 매개변수를 받아서 onCreate를 실행해야함
  const onCreate = (content) => { //onCreate실행
    const newTodo = {  //newTodo 변수에 객체가 만들어짐
      id: idRef.current++, //content 매개변수로 받은 값을 newTodo로 저장
      isDone: false,
      content: content,
      data: new Date().getTime(),
    }
    setTodos([newTodo, ...todos]);
    //setTodos실행, todos에 저장되어있는 값 기반으로 새로운 배열 생성
    //새로운 배열을 todos 상태로 보관
  } //함수 종료, newTodo 변수 사라짐

  const onUpdate = (targetId) => {
    // todos State 값들 중 targetId와 일치하는
    // id를 갖는 투두 아이템의 isDone값을 변경

    // 인수: todos배열에서 targetId와 일치하는 id를 갖는 요소의
    // 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map(
        (todo) => todo.id === targetId ?
          { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  const onDelete = (targetId) => {
    //인수 : todos 배열에서 targetId와 일치하는 id를 갖는
    // 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) =>todo.id != targetId))
  }

  return (
    <div className='app'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
