import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../../public/resources/css/TodoList.css';


export default function todoList() {
  
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput("");
  },[list])

  function handleInput(val) {
    setInput(val); 
  }

  function handleList() {
    if (!input) { 
      alert("할 일을 입력하세요.");
      return;
    }
    
    const tmp = [...list];
    tmp.push(input);
    setList(tmp);
    controlLocalStorage(tmp);
  }

  function remove(index) {
    // if (confirm("삭제 하시겠습니까?")) {
      setList(list.filter((item, idx) => idx !== index));
      controlLocalStorage(list.filter((item, idx) => idx !== index));
    // }
  }

  const controlLocalStorage = (data) => {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  useEffect(() => {
    const storedData = localStorage.getItem('todoList');
    if (storedData) {
      setList(JSON.parse(storedData)); 
    }
  }, []);


  return (
    <>
      <div className="todo_container">
        <h1>Todo</h1>
        <div id="inputField">
          <input type="text" id="todoInput" placeholder="할 일 추가하기"  value={input} onChange={(e) => handleInput(e.target.value)} onKeyDown={(e) => e.keyCode == 13 && handleList()}/>
          <button type="button" className="btn addBtn" onClick={() => handleList()}>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul id="todoList">
          
        </ul>
        <table className="table" id="table">
          <colgroup>
            <col style={{width:"33%"}}/>
            <col style={{width:"33%"}}/>
            <col style={{width:"33%"}}/>
          </colgroup>
          <thead>
          </thead>
          <tbody>
            {list.map((item, idx) => {
              return (
                <tr key={"list" + idx}>
                  <td style={{textAlign:"left"}}>{idx+1}</td>
                  <td style={{textAlign:"center"}}>
                    <span className='list_content'>{item}</span>
                  </td>
                  <td style={{textAlign:"right"}}>
                    <button className='btn delBtn' onClick={() => remove(idx)}>
                      <span></span>
                      <span></span>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      </>
  );
}
