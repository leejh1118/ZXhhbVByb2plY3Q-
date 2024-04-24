import { Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";

export default function RoomA() {
  return (
    <>
      <Routes>
        <Route path="/todolist" element={<TodoList />}></Route>
      </Routes>
    </>
  )
}