import { useRef, useState } from "react";
import Win from "./Win.jsx";
import Info from "./Info.jsx";
import logo from "../assets/logo.png"

let Number = Math.floor(Math.random() * 100) + 1;
export default function Header() {
  const random = useRef();
  const [EnteredNumber, SetenteredNumber] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  function handleClick() {
    if (!gameWon) {
      const inputValue = random.current.value;
      if (inputValue.trim() !== '' && EnteredNumber.length <=10 ) {
        SetenteredNumber((prev) => [...prev, inputValue]);
        if (inputValue == Number) {
          console.log("win")
          setGameWon(true);
        }
      }
    }
  }

  function handelReset() {
    SetenteredNumber([]);
    Number = Math.floor(Math.random() * 100) + 1;
    setGameWon(false);
    random.current.value=""; //not a prefer to use it but for now its ok;
  }

 
  return (
    <div className="main">
      <img src={logo} />
       <h1 id="heading">Guess the Number</h1>
       <p className="para">Enter your Number </p>
      <input type="number" ref={random} />
      <button className="btn" onClick={handleClick}>submit</button>
      <Info userinput={EnteredNumber}  wininfo={gameWon} />
      <Win array={EnteredNumber} targetnumber={Number} onClick={handelReset} />
    </div>
  );
}
