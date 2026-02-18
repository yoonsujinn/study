import "./list.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => //모든 todos를 순회하며 결과에 맞는것만 반환
      todo.content.toLowerCase().includes(search.toLowerCase())// 문자열 확인하여 t/f값을 반환함.
    );
  };

  const filteredTodos = getFilteredDate();

  return (
    <div className="list">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          // 리스트 형태로 prop을 전달하게 되면 key라는 고유한 값을 전달해줘야함.
          return <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete} />
        })}
      </div>

    </div>

  );
};


export default List;