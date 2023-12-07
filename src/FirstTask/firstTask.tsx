import React, { useState, useRef, ChangeEvent } from "react";
import TaskTwoInFirstTask from "./tasktwoinfirsttask";
import Taskthreeinfirsttask from "./taskthreeinfirsttask"

interface InputItem {
  text: string;
  id: number;
}

const FirstTask: React.FC = () => {
  const [inputs, setInputs] = useState<InputItem[]>([
    { text: 'Exapmle of an output', id: 1 }
  ]);

  const [currentInput, setCurrentInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (currentInput.trim() !== '') {
      setInputs([...inputs, { text: currentInput, id: inputs.length + 1 }]);
      setCurrentInput('');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      alert('Please write something in the input!');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  return (
    <div className="first-task">
        <div className="first-task-wrapper">
          <div className="input-button-wrap">
              <input
                type="text"
                autoFocus
                value={currentInput}
                onChange={handleInputChange}
                ref={inputRef}
                placeholder="Type something..."
              />
              <button onClick={handleClick}>Submit</button>
          </div>
        <ul>
          {inputs.map((input) => (
            <li key={input.id}>{input.text}</li>
          ))}
        </ul>
      </div>
      <TaskTwoInFirstTask />
      <Taskthreeinfirsttask />
    </div>
  );
};

export default FirstTask;
