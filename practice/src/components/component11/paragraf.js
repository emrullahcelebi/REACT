import React, { useState } from "react";
import data from "./data.js";
import "./text.css";
const Paragraf = () => {
  const [count, setCount] = useState(0);

  const [text, setText] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault(); /* sayfanin yeniden yuklenmesini engeller */
    let amount = count;
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length) {
      amount = data.length;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section>
      <h3>Kac Tane Paragraf</h3>
      <form action="">
        <label htmlFor="amount">Paragraphs</label>
        <input
          type="number"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" onClick={handleGenerate}>
          Generate
        </button>
        <button className="btn btn-danger" onClick={()=>setCount(0)}>Clear</button>
      </form>
      <div className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item} </p>
        ))}
      </div>
    </section>
  );
};

export default Paragraf;
