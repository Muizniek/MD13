import { useState } from "react";
import './App.css'
import Firsttask from './FirstTask/firstTask'
import Secondtask from './SecondTask/secondTask'
import Thirdtask from './ThirdTaks/Thirdtask'

function App() {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const handleTaskClick = (task: string) => {
    setSelectedTask(task);
  };

  return (
    <div className='tasks'>
      <div className="task-buttons">
        <button onClick={() => handleTaskClick("first")}>Task 1</button>
        <button onClick={() => handleTaskClick("second")}>Task 2</button>
        <button onClick={() => handleTaskClick("third")}>Task 3</button>
      </div>
      
      {selectedTask === "first" && <Firsttask />}
      {selectedTask === "second" && <Secondtask />}
      {selectedTask === "third" && <Thirdtask />}
    </div>
  );
}

export default App;




