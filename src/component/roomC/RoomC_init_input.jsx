import { useEffect, useRef, useState } from "react";

export default function RoomC_init_lines(props) {
  const { loading, setLoading, setInit, addLine, initInputRef } = props;
  const [realText, setRealText] = useState("");
  const [fakeText, setFakeText] = useState("");

  // 입력 값 state 저장
  const handleInput = (value) => {
    setRealText(value);
    setFakeText("*".repeat(value.length));
  }

  // 페이지 초기 password 입력 동작 기능
  function handleInitCommand(value) {
    addLine(initPw + fakeText);

    if(value === "1234") {
      setLoading(true);
      addInitLines(0);
    }
    else {
      addLine("wrong password");
    }

    handleInput("");
  }

  // setTimeout 참조: page unmount시 setTimeout 삭제하기 위한 용도
  const timeRef = useRef(null);
  function addInitLines(n) {
    addLine(initLines[n]);

    if(n !== initLines.length - 1)
      // setTimeout 참조
      timeRef.current = setTimeout(() => {
        // 재귀 호출, recursive call
        addInitLines(n + 1);
      }, Math.round(Math.random() * 200 + 50));

    if(n === initLines.length - 2) {
      setInit(false);
      setLoading(false);
    }
  }

  useEffect(() => {
    // page unmount시 setTimeout 삭제
    return () => clearTimeout(timeRef.current);
  }, [])

  const initPw = "root@User's password: ";

  const initLines = [
    "Last login: Thur Apl 9 11:30:48 2024 from 48.4.0.8",
    "[root@3%%je30C# ~]# console",
    "-------------------------------------------------------------------------------",
    "Copylight (c) 1933-2024, Backroom408 Networks Corperation, All Rights Reserved.",
    "-------------------------------------------------------------------------------",
    "< System Status >",
    "HOST : 1",
    "STATUS : ENA",
    "OS VERSION : 2.6.32-431.5.1.e16.i686",
    "MEMORY : 408408/81681600",
    "LOG DATA : TRUE",
    "",
    "[root@3%%je30C# ~]# exit",
    "[ERROR - 11:30:00 2024] :: Command 'exit' failed. ",
    "3%%je30C# has logged out.",
    "",
    "-------------------------------------------------------------------------------",
    "CAUTION!",
    "The NuPoint Unified Messaging server \"times out\" after 15 minutes.  This means that if you do not enter anything at the console for 15 minutes, the server automatically exits from the current program.  When this happens, all work that has not been saved on the disk is lost.",
    "-------------------------------------------------------------------------------",
    "",
  ]

  return (
    <>
      { !loading &&
        <>
          <div id="init_input_wrap" className="console_line">
            <span className="console_line_word">{initPw}</span>
            <span className="console_line_word">{fakeText}</span>
            <span className="console_line_word">_</span>
          </div>
          
          <input className="console_input" type="text" placeholder="text"
            ref={initInputRef}
            value={realText}
            onChange={(e) => handleInput(e.target.value)}
            onKeyDown={(e) => (e.keyCode == 13 & !loading) && handleInitCommand(e.target.value)}
          />
        </>
      }
    </>
  )
}