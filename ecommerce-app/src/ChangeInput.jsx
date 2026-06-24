import { useState } from "react";

function ChangeInput() {

    let [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <h2>Enter Input </h2>
            <input onChange={handleChange} type="text" />
            <div>
                {text}
            </div>
        </div>
    )
}

export default ChangeInput;