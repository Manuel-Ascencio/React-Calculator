import { useState } from "react";
import "./App.css";
import { FiDelete } from "react-icons/fi";

function App() {
  const [result, setResult] = useState("");

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
          <input type="text" value={result} readOnly="readonly" />
        </form>
        <div className="keys">
          <button onClick={clear} id="clear">
            AC
          </button>
          <button onClick={backspace} id="del">
            <FiDelete />
          </button>
          <button name="/" onClick={handeClick} id="divide">
            &divide;
          </button>
          <button name="7" onClick={handeClick}>
            7
          </button>
          <button name="8" onClick={handeClick}>
            8
          </button>
          <button name="9" onClick={handeClick}>
            9
          </button>
          <button name="*" onClick={handeClick} id="multiply">
            &times;
          </button>
          <button name="4" onClick={handeClick}>
            4
          </button>
          <button name="5" onClick={handeClick}>
            5
          </button>
          <button name="6" onClick={handeClick}>
            6
          </button>
          <button name="-" onClick={handeClick} id="less">
            &ndash;
          </button>
          <button name="1" onClick={handeClick}>
            1
          </button>
          <button name="2" onClick={handeClick}>
            2
          </button>
          <button name="3" onClick={handeClick}>
            3
          </button>
          <button name="+" onClick={handeClick} id="add">
            +
          </button>
          <button name="0" onClick={handeClick}>
            0
          </button>
          <button name="." onClick={handeClick}>
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
