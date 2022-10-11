import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("/api/value", {value});
      setLists(lists.concat(data));
      setValue("");
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get("/api/values");
      console.log(data);
      setLists(data);
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{lists && lists.map((v, i) => <li key={i}>{v.value}</li>)}</ul>
        <form style={{display: "flex"}} onSubmit={onSubmit}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="submit">추가</button>
        </form>
      </header>
    </div>
  );
}

export default App;
