// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import User from'./User'
// import Header from './Header'

// function App() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <>
//     <Header />
//     <h1>Counter Val: {counter}</h1>
//       <User />
//       <button onClick={() => setCounter(counter + 1)}>Increase Counter Val</button>
//     </>


//   )
// }

// export default App
import Input from "./Get Input Field Value/Input";
import Props from "./belajarProps/Props";
import Conditions from "./Fitur Toggle/multiple conditions/Conditions";
import Toggle from "./Fitur Toggle/Toggle";
import Fruit from "./blajarUseState/Fruit";
import Login,{Logout} from "./Login";
import { useState } from "react";
function App() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1>hello</h1>
      <Logout />
      <Login />
      <Fruit />
      <Color />
            
      {display ? <Toggle /> : null}
      <button onClick={()=> setDisplay(!display)}> Toggle </button>
      <Conditions />

      <Props name="alvin" age={20} email="alvin@gmail.com" />
      <Input />
      
    </div>
  );
}

// function Fruit() {
//   return (
//       <h1>  ini fruit </h1>
//   )
// }

function Color() {
  return(
    <h1> ini color </h1>
  )
}

export default App;