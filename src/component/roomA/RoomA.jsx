import { Route, Routes, useNavigate } from "react-router-dom";
import TodoList from "./TodoList";
import { useEffect } from "react";

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