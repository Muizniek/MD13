import Firstbox from './firstbox'
import Secondbox from './seconbox'

const Secondtask: React.FC = () => {
  return (
    <div className="box-wrapers">
        <div className='task-2-first-box'>
            <Firstbox />
        </div>
        <div className="task-2-second-box">
            <Secondbox />
        </div>
    </div>
  );
};

export default Secondtask;
