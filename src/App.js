import { useState } from 'react';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const [disableButton, setDisableButton] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red' ;

  return (
    <>
      <div className="App">
        <button className={disableButton ? 'disabled-color-button' : 'enabled-color-button'} onClick={() => { buttonColor === 'red' ? setButtonColor('blue') : setButtonColor('red') }} disabled={disableButton}>Change to {newButtonColor}</button>
      </div>
      <div className="App">
        <input type="checkbox" id="disable-button-checkbox" onChange={() => setDisableButton(!disableButton)} checked={disableButton} />
        <label htmlFor="disable-button-checkbox">Disable Button</label>
      </div>
    </>
  );
}

export default App;
