import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoomC_command_input(props) {
    const { loading, setLoading, addLine, inputRef } = props;
    const [text, setText] = useState("");
    const navigate = useNavigate();

    // 입력 값 state 저장
    const handleInput = (value) => {
        setText(value);
    }

    // command 입력시 동작 기능
    const handleCommand = (keyword) => {
        if(loading || !keyword) return;

        let word = reservedWord[keyword];

        // 예약어에 없을 경우
        if(!word)
            word = `bash: ${keyword}: command not found`;

        if(keyword === "exit")
            navigate(-1);

        if(word === "Loading...")
            setLoading(true);

        keyword = "[root@User ~]# " + keyword;
        addLine(keyword);
        
        setText("");
        setTimeout(() => {
            addLine(word);
        }, 100);
    }

    // page mount될 때 input에 focus
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const reservedWord = {
        "help": "ls info ip exit",
        "ls": "READMD.md /test /appdata",
        "info" : "이정현 바보",
        "ip": "48.4.0.8",
        "exit": ".",
        "vi": "command error: vi 'fileName'",
        "vi README.md": "Loading...",
        "name": "Backroom408 Networks Corperation",
    }

    return(
        <>
            <div id="command_input_wrap" className="console_line">
              <span className="console_line_word">{"[root@User ~]# " + text}</span>
              <span className="console_line_word">_</span>
            </div>
            
            <input className="console_input" type="text" placeholder="text"
                ref={inputRef}
                value={text}
                onChange={(e) => handleInput(e.target.value)}
                onKeyDown={(e) => (e.keyCode == 13 & !loading) && handleCommand(e.target.value)}
            />
        </>
    )
}