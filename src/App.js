import { useState } from "react";
import "./App.css";
function App() {
  const [result, setResult] = useState("3");

  const clear = () => {
    setResult("");
  };

  const handeClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult(result);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keys">
          <button onClick={clear} id="clear">
            Clear
          </button>
          <button onClick={backspace} id="">
            C
          </button>
          <button name="/" onClick={handeClick} id="divide">
            &divide;
          </button>
          <button name="7" onClick={handeClick} id="seven">
            7
          </button>
          <button name="8" onClick={handeClick} id="eight">
            8
          </button>
          <button name="9" onClick={handeClick} id="nine">
            9
          </button>
          <button name="*" onClick={handeClick} id="multiply">
            &times;
          </button>
          <button name="4" onClick={handeClick} id="four">
            4
          </button>
          <button name="5" onClick={handeClick} id="five">
            5
          </button>
          <button name="6" onClick={handeClick} id="six">
            6
          </button>
          <button name="-" onClick={handeClick} id="subtract">
            &ndash;
          </button>
          <button name="1" onClick={handeClick} id="one">
            1
          </button>
          <button name="2" onClick={handeClick} id="two">
            2
          </button>
          <button name="3" onClick={handeClick} id="three">
            3
          </button>
          <button name="+" onClick={handeClick} id="add">
            +
          </button>
          <button name="0" onClick={handeClick} id="zero">
            0
          </button>
          <button name="." onClick={handeClick} id="decimal">
            .
          </button>
          <button onClick={calculate} id="equals">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
