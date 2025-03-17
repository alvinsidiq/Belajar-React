import { useState } from "react";

function Input(){
    const [val,setVal] = useState("");
    return(
        <div>
            <input
            type="text" 
            placeholder="Enter Username"
            value = {val}
            onChange={(event) =>setVal(event.target.value)}
            />
            <h1>{val}</h1>
            <button onClick={()=>setVal("")}>clear Value</button>
        </div>
    )
}

export default Input;