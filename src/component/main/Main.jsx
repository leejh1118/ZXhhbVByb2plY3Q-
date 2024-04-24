import { Route, Routes, useRoutes } from "react-router-dom";

export default function Main() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<a href="/room-a/todolist">asd</a>}></Route>
      </Routes>
    </>
  )
}