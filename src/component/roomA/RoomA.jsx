import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TodoList from "./TodoList";
import '../../styles/TodoList.css';

export default function RoomA() {
  const navigate = useNavigate();

  useEffect(() =>{
    navigate("./todolist", { replace: true });
  }, [])

  return (
    <>
      <Routes>
        <Route path="/todolist" element={<TodoList />}></Route>
      </Routes>
    </>
  )
}