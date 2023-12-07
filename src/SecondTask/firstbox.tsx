import React, { useState, useEffect } from "react";

const Firstbox: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    console.log('RENDER'); // Log on every render
  });

  useEffect(() => {
    console.log('FIRST RENDER'); // Log on the first render
  }, []);

  useEffect(() => {
    console.log('CHANGING COUNT', count); // Log when count changes
  }, [count]);

  useEffect(() => {
    console.log('INPUT CHANGE', inputText); // Log when input text changes
  }, [inputText]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <p>Count: {count}</p>
      </div>
      <div>
        <label htmlFor="textInput">Enter text:</label>
        <input
          type="text"
          id="textInput"
          value={inputText}
          onChange={handleInputChange}
        />
        <p>Typed Text: {inputText}</p>
      </div>
    </div>
  );
};

export default Firstbox;
