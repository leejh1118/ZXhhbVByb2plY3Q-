import { useNavigate } from "react-router-dom";

export default function Navigation_bar() {
    const navigate = useNavigate();

    const toPath = () => {
        navigate(-1);
    }

    return(
        <div id="navigation_bar">
          <a onClick={() => toPath()}>← Back</a>
        </div>
    )
}