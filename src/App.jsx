import { useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Main from "./component/main/Main.jsx";
import RoomA from "./component/roomA/RoomA.jsx";
import RoomB from "./component/roomB/RoomB.jsx";
import RoomC from "./component/roomC/RoomC.jsx";
import RoomD from "./component/roomD/RoomD.jsx";
import RoomE from "./component/roomE/RoomE.jsx";
import RoomF from "./component/roomF/RoomF.jsx";
import RoomG from "./component/roomG/RoomG.jsx";
import RoomH from "./component/roomH/RoomH.jsx";
import RoomJ from "./component/roomJ/RoomJ.jsx";
import RoomK from "./component/roomK/RoomK.jsx";
import RoomL from "./component/roomL/RoomL.jsx";
import RoomM from "./component/roomM/RoomM.jsx";



function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const toPath = () => {
    navigate(-1);
  }

  return (
    <>
      {location.pathname != "/" &&
        <div style={{paddingLeft: "2em", paddingTop: "1em"}}>
          <a onClick={() => toPath()} style={{cursor: "pointer"}}>← Back</a>
        </div>
      }
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/room-a/*" element={<RoomA />}></Route>
        <Route path="/room-b" element={<RoomB />}></Route>
        <Route path="/room-c/*" element={<RoomC />}></Route>
        <Route path="/room-d/*" element={<RoomD />}></Route>
        <Route path="/room-e/*" element={<RoomE />}></Route>
        <Route path="/room-f/*" element={<RoomF />}></Route>
        <Route path="/room-g/*" element={<RoomG />}></Route>
        <Route path="/room-h/*" element={<RoomH />}></Route>
        <Route path="/room-j/*" element={<RoomJ />}></Route>
        <Route path="/room-k/*" element={<RoomK />}></Route>
        <Route path="/room-l/*" element={<RoomL />}></Route>
        <Route path="/room-m/*" element={<RoomM />}></Route>
      </Routes>
    </>
  );
}

export default App;
