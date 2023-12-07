import React, { useRef } from "react";

const BoxtaskTwo: React.FC = () => {
  const squareRef = useRef<HTMLDivElement>(null);

  const cloneSquare = () => {
    if (squareRef.current) {
      const newSquare = squareRef.current.cloneNode(true) as HTMLDivElement;
      newSquare.style.backgroundColor = "gold";
      squareRef.current.parentNode?.appendChild(newSquare);
    }
  };

  return (
    <div className="box-task-two">
        <div className="button--wrapper">
            <button onClick={cloneSquare} style={{
                height: "20px"
                }}>Clone div</button>
      </div>
      <div className="cloned-items-wraper">
        <div
            ref={squareRef}
            style={{
            width: "50px",
            height: "50px",
            backgroundColor: "gold", 
            margin: "10px",
            }}
        ></div>
      </div>
    </div>
  );
};

export default BoxtaskTwo;
