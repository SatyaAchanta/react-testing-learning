import { useState } from 'react';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const [disableButton, setDisableButton] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <>
      <div className="App">
        <button className='color-button' onClick={() => { buttonColor === 'red' ? setButtonColor('blue') : setButtonColor('red') }} disabled={disableButton}>Change to {newButtonColor}</button>
      </div>
      <div className="App">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={() => setDisableButton(!disableButton)} checked={disableButton} />
      </div>
    </>
  );
}

export default App;
