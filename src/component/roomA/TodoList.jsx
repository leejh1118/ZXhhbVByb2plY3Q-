import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
        <div id="todo_title_box">
          <img src='https://cdn-icons-png.flaticon.com/512/654/654116.png' />
          <h2>Todo</h2>
          <span>{new Date().toLocaleDateString()}</span>
        </div>

        <div id="inputField">
          <input type="text" id="todoInput" placeholder="할 일 추가하기"  value={input} onChange={(e) => handleInput(e.target.value)} onKeyDown={(e) => e.keyCode == 13 && handleList()}/>
          <button type="button" className="btn addBtn" onClick={() => handleList()}>Add</button>
        </div>

        <div className='table_box'>
          <div className='table_info'>
            leejh1118 Merge pull request backroom408#15 from backroom408/leejh1118-patch-1
          </div>
          <table className="table" id="table">
            <colgroup>
              <col style={{width:"20%"}}/>
              <col style={{width:"auto"}}/>
              <col style={{width:"33%"}}/>
            </colgroup>
            <tbody>
              {list.map((item, idx) => {
                return (
                  <tr key={"list" + idx}>
                    <td style={{textAlign:"left"}}>📜 {idx + 1}</td>
                    <td style={{textAlign:"left"}}>
                      <span className='list_content'>{item}</span>
                    </td>
                    <td style={{textAlign:"right"}}>
                      <button className='btn delBtn' onClick={() => remove(idx)}>Del</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div>
      </>
  );
}
