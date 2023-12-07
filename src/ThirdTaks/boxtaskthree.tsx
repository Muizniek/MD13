import React, { useRef } from "react";

const Boxtaskthree: React.FC = () => {
  const squareRef = useRef<HTMLDivElement>(null);

  const sendDivToContainer = () => {
    if (squareRef.current) {
      const container = document.getElementById("container");
      if (container) {
        squareRef.current.style.position = "absolute";
        squareRef.current.style.top = "0";
        squareRef.current.style.right = "0";
        squareRef.current.textContent = "esmu stūrī";
        container.appendChild(squareRef.current);
      }
    }
  };

  return (
    <div>
      <div
        id="container"
        style={{ position: "relative", height: "300px", border: "1px solid black", display: "flex", flexDirection: "column-reverse" }}
      >
        <div
          ref={squareRef}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "gold", 
            margin: "10px",
            display: 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            fontSize: '20px',
          }}
        >
          <button onClick={sendDivToContainer}>Send div to container</button>
        </div>
      </div>
    </div>
  );
};

export default Boxtaskthree;
