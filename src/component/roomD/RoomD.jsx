import { Route, Routes } from "react-router-dom";
import List from "./list";
import Detail from "./detail";

function RoomD() {

  return (
    <>
      <Routes>
        <Route path="/list" element={<List/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
      </Routes>
    </>
  )
}
export default RoomD;