import { Route, Routes } from "react-router-dom";
import List from "./list";
import Detail from "./detail";
import '../../styles/roomD.css';

function RoomD() {

  return (
    <>
      <Routes>
        <Route path="/" element={<List/>}></Route>
        <Route path="/detail/:name" element={<Detail/>}></Route>
      </Routes>
    </>
  )
}
export default RoomD;