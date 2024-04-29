import '../../styles/roomC.css';
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import RoomC_init_input from './RoomC_init_input';
import RoomC_command_input from './RoomC_command_input';

export default function RoomC() {
  const [lines, setLines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [init, setInit] = useState(true);

  const inputRef = useRef();
  const initInputRef = useRef();
  const consoleRef = useRef();
  const keyRef = useRef(Array(500).fill(false));

  // console line 추가
  const addLine = (value) => {
    setLines(prev => [...prev, value]);
  }

  // input fucusing 함수
  const handleInputFocus = () => {
    if(init)
      initInputRef.current.focus();
    else
      inputRef.current.focus();
  }

  // 페이지 초기 loading: false, init: true
  useEffect(() => {
    // RoomC_init_input의 input tag에 focus;
    initInputRef.current.focus();

    // ctrl + c 단축키 기능
    window.onkeydown = (e) => {
      keyRef.current[e.keyCode] = true;
      
      if(keyRef.current[67] && keyRef.current[17]) {
        e.preventDefault();
        setLoading(false);
      }

      // loading이 아닐 때 key 입력이 있을 경우 맨 아래로 이동
      if(!loading && consoleRef.current.scrollTop !== consoleRef.current.scrollHeight)
        handleConsoleScroll();
    };

    window.onkeyup = (e) => {
      keyRef.current[e.keyCode] = false;
    }

  }, [])
  
  // console 창 스크롤 하단으로 내림
  const handleConsoleScroll = () => {
    consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
  }
  
  // rerender될 때 마다 적용
  useEffect(() => {
    handleConsoleScroll();
  })

  return (
    <div id="roomC_wrap">
      <div id="background" onClick={() => handleInputFocus()}>
        <div id="console" ref={consoleRef}>

          {lines.map((item, idx) => {
            return(
              <div key={"line" + idx}>
                <span className="console_line_word">{item}</span>
              </div>
            )
          })}

          {init &&
            <RoomC_init_input
              loading={loading}
              setLoading={setLoading}
              setInit={setInit}
              addLine={addLine}
              initInputRef={initInputRef}
            />
          }
          
          {(!loading && !init) &&
              <RoomC_command_input
              loading={loading}
              setLoading={setLoading}
              addLine={addLine}
              inputRef={inputRef}
            />
          }
          
        </div>
      </div>
    </div>
  )
}