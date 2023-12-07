import Boxtaskone from './boxtaskone'
import BoxtaskTwo from './boxtaskTwo'
import Boxtaskthree from './boxtaskthree'


const Thirdtask: React.FC = () => {
  return (
    <div className="box-wrapers">
        <Boxtaskone />
        <BoxtaskTwo />
        <Boxtaskthree />
    </div>
  );
};

export default Thirdtask;