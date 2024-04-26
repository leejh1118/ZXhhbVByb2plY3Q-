import '../../../public/resources/css/roomC.css';
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import RoomC_init_input from './RoomC_init_input';
import RoomC_command_input from './RoomC_command_input';

export default function RoomC() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [init, setInit] = useState(true);

  const inputRef = useRef();
  const initInputRef = useRef();
  const consoleRef = useRef();
  const keyRef = useRef(Array(500).fill(false));

  const reservedWord = {
    "help": "ls info ip exit",
    "ls": "READMD.md /test /appdata",
    "info" : "이정현 바보",
    "ip": "48.4.0.8",
    "exit": "",
    "vi" : "command error: vi 'fileName'",
    "vi README.md" : "Loading...",
  }

  // console line 추가
  const addLine = (value) => {
    setLines(prev => [...prev, value]);
  }

  // 입력 값 state 저장
  const handleInput = (value) => {
    setText(value);
  }

  // input fucusing 함수
  const handleInputFocus = () => {
    // inputRef.current.focus();
  }
    
  // command 입력시 동작 기능
  const handleCommand = (value) => {
    if(loading || !value) return;

    let word = reservedWord[value];
    if(!word)
      word = `bash: ${value}: command not found`;

    if(word === "Loading...")
      setLoading(true);

    value = "[root@User ~]# " + value;
    addLine(value);
    setText("");
    setTimeout(() => {
      addLine(word);
    }, 100);
  }
  
  // console 창 스크롤 하단으로 내림
  const handleConsoleScroll = () => {
    consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
  }

  // 페이지 초기 loading: false, init: true
  useEffect(() => {
    initInputRef.current.focus();

    window.onkeydown = (e) => {
      keyRef.current[e.keyCode] = true;
      
      if(keyRef.current[67] && keyRef.current[17]) {
        e.preventDefault();
        setLoading(false);
      }
    };

    window.onkeyup = (e) => {
      keyRef.current[e.keyCode] = false;
    }

  }, [])
  
  useEffect(() => {
    handleConsoleScroll();
  })

  return (
    <div id="roomC_wrap">
      <input className="console_input" type="text" placeholder="text"
        ref={inputRef}
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        onKeyDown={(e) => (e.keyCode == 13 & !loading & init) && handleCommand(e.target.value)}
      />

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

          <RoomC_command_input
            setLines={setLines}
          />

          { (!loading && !init) &&
            <div className="console_line">
              <span className="console_line_word">{"[root@User ~]# "}</span>
              <span className="console_line_word">{text}</span>
              <span className="console_line_word">_</span>
            </div>
          }
        </div>
      </div>
    </div>
  )
}