import './App.css';
import Picture from './image';
import Description from './decription';
import Price from './price';
import Name from './websitename';
import Shape from './shapes/shape'
import App1, { Circle, Cuboid } from './shapes/shape';
import Formula from './bttask/formula'
import Hook from './shapes/hookpd';
//import Button from '@mui/material/Button';  
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
          {/* <Picture></Picture>
          </header> 
          <h1 style={{color: "Red"}}>Description:</h1> 
          <div className='des'>
          <Description></Description>
          </div>
          <Price></Price>
          <Name></Name> */}
    <Shape></Shape>
  <Formula></Formula>
  <Hook/>
    </div>
  );
}

export default App;
