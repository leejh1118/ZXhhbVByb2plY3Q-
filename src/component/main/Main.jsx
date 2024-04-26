import { Link } from "react-router-dom";

export default function Main() {
  
  return (
    <>
      <link rel="stylesheet" href="/resources/css/mainpage.css"></link>
    <div id="main_wrap">
      <h2 style={{textAlign: "center", paddingTop: "1em", fontWeight: "700"}}>{"< 408 >"}</h2>
      <div id="doors">
        {Array(26).fill().map((item, idx) => {
          let lower = String.fromCharCode(97 + idx);
          let upper = String.fromCharCode(65 + idx);
          return(
              <Link to={`/room-${lower}/`} key={"menu" + idx}>
                <span>{`Room ${upper}`}</span>
              </Link>
          )
        })}
      </div>
      </div>
    </>
  )
}