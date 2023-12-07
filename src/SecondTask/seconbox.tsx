import React, { useState, useEffect } from "react";

const Secondbox: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [inputText, setInputText] = useState<string>('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    document.title = `${inputText}`;
  }, [inputText]);

  return (
    <div>
      <div>
        <button onClick={() => { handleIncrement(); }}>+</button>
        <p>Count: {count}</p>
      </div>
      <div>
        <label htmlFor="textInput">Enter text:</label>
        <input
          type="text"
          id="textInput"
          value={inputText}
          onChange={handleInputChange}
          onBlur={() => { document.title = `${inputText}`; }} 
          style={{ fontSize: `${count + 16}px` }}
        />
        <p style={{ fontSize: `${count + 16}px` }} >Typed Text: {inputText}</p>
      </div>
    </div>
  );
};

export default Secondbox;
