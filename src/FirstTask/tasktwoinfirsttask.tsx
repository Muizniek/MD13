import React, { useState, useEffect } from "react";

const TaskTwoInFirstTask: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handleButtonClick = (operation: "add" | "multiply") => {
    if (operation === "add") {
      setCount(count + 1);
    } else if (operation === "multiply") {
      setCount(count * 2);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonDisabled(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="task-two">
      <button
        onClick={() => handleButtonClick("add")}
        disabled={isButtonDisabled}
      >
        Poga
      </button>
      <button onClick={() => handleButtonClick("multiply")}>count * 2</button>
      <p className="output-number">{count}</p>
    </div>
  );
};

export default TaskTwoInFirstTask;
