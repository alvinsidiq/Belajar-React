import { useState } from "react";

function Fruit(){

const [fruit,setfruit] = useState('apple');

    return (
        <div>
            <h1>{fruit}</h1>
            <button onClick={() => setfruit('banana')}> Ubah Nama Buah </button>
        </div>
    );
}

export default Fruit;