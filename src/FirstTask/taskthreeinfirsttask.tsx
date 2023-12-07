import React, { useState } from "react";

interface ColorOption {
  id: number;
  name: string;
  value: string;
}

const Taskthreeinfirsttask: React.FC = () => {
    const colorOptions: ColorOption[] = [
      { id: 1, name: "Red", value: "#FF0000" },
      { id: 2, name: "Green", value: "#00FF00" },
      { id: 3, name: "Blue", value: "#0000FF" },
      { id: 4, name: "Yellow", value: "#FFFF00" },
      { id: 5, name: "Purple", value: "#800080" },
      { id: 6, name: "Cyan", value: "#00FFFF" },
      { id: 7, name: "Magenta", value: "#FF00FF" },
      { id: 8, name: "Orange", value: "#FFA500" },
      { id: 9, name: "Brown", value: "#A52A2A" },
      { id: 10, name: "Pink", value: "#FFC0CB" },
    ];

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [squares, setSquares] = useState<string[]>([]);

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleAddSquare = () => {
    if (selectedColor) {
      setSquares([...squares, selectedColor]);
    }
  };

  return (
    <div className="color--Picker">
        <div className="wrapper-for-colorpicker">
            <label htmlFor="colorDropdown">Select a color:</label>
            <select
                id="colorDropdown"
                onChange={handleColorChange}
                value={selectedColor || ""}
            >
                <option value="" disabled>
                Choose a color
                </option>
                {colorOptions.map((color) => (
                <option key={color.id} value={color.value}>
                    {color.name}
                </option>
                ))}
            </select>
            <button onClick={handleAddSquare}>+</button>
        </div>
        <div className="sqares">
            {squares.map((squareColor, index) => (
                <div
                key={index}
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: squareColor,
                    margin: "5px",
                }}
                ></div>
            ))}
      </div>
    </div>
  );
};

export default Taskthreeinfirsttask;
