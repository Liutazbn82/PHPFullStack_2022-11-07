import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function App() {
//   const [name, setName] = useState("Putka")

//   return (
//     <div className="App">  
//       <header className="App-header">
//         <div>
//           <img src={logo} className="App-logo" alt="logo" />
//           <div id="name">{name}</div>
//           <button onClick={ () => {setName("Petras")  }}>Keisti reiksme!</button>
//         </div> 
//       </header> 
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0)
//   console.log(count)
//   return (
//     <div className="App">  
//       <header className="App-header">
//         <div>
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1>{count}</h1>

//           <button onClick={ () => {
//             setCount(count + 1)
//           }}>Didinti!</button>

//           <button onClick={ () => {
//             setCount(count - 1)
//           }}>Mazinti!</button>   

//         </div> 
//       </header> 
//     </div>
//   );
// }

// function App() {
//   const [inputName, setInputName] = useState("")
//   console.log(inputName)
//   return (
//     <div className="App">  
//       <header className="App-header">
//         <div>
//           <img src={logo} className="App-logo" alt="logo" />
//           <br/>
//           <input
//               type="textas"
//               placeholder="Name..."
//               onChange={(event) => {
//                 setInputName(event.target.value);
//               }} 
//           />
//           <h1>{inputName}</h1>


//         </div> 
//       </header> 
//     </div>
//   );
// }

function App() {
  // galima naudoti paprastai (eilute zemiau)
  // const counterState = useState(0)
  // console.log(counterState[0])
  // console.log(counterState[1])

  // bet pakeisime į kitoki buda
  const [counter, setCounter] = useState(0)

  function increment() {
    // setCounter(counter + 1)
    setCounter(( prevCounter ) => {
      return prevCounter + 3
    })

    setCounter(prev => prev + 1 )
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Skaitiklis: {counter}</h1>
      <button onClick={increment}>Prideti</button>
      <button onClick={decrement}>Atimti</button>
    </div>
  )

}

export default App;
