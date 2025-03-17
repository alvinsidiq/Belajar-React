import { useState } from "react";

function Conditions() {
    const[count,setCounter] = useState(0);
    return(
        <div>
            <h1> Count : {count}</h1>
            {
                count === 0 ? <h1> Conditions 0 </h1> : 
                count === 1 ? <h1>condition 1 </h1> :
                count === 2 ? <h1>condition 2</h1> : 
                count === 3 ? <h1>condition 3</h1> : 
                count === 4 ? <h1>condition 4</h1> : 
                <h1>other condition </h1>

            }

            <button onClick={()=> setCounter (count+1)}> Increse Count </button>
        </div>
    );
}

export default  Conditions;