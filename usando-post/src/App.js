import './App.css';
import Login from "./Components/Login"
import Display from './Components/Display';
import {useState} from "react"

function App() {

  const [show,setShow]= useState(null)
  return (
    <div className="App">
      <header className="App-header">
        <Login setShow={setShow}/>
        <Display show={show}/>
      </header>
    </div>
  );
}

export default App;
