import './App.css';
import DrumPad from './DrumPad.js';
import sound from './data.js';
import {useState } from 'react';

function App() {
  const [display, setDisplay] = useState('Preset 1');
  const [power, setPower] = useState(false);

  
  const changePower = () => {
    setPower(p => p === true ? false : true);
  }
  

  const displayHandler = (name) => {
    setDisplay(name);
  }

  return (
    <div className="App">
      <div className="drum-machine">
        <h1><em>FCC Drum Machine</em></h1>
        <div className="power-btn">
          <p>Power</p>
          <span id="btn-trigger" className={`${power}`} onClick ={changePower}></span>
        </div>
        <p className="display">{display}</p>
        <div className="row">
          <DrumPad name={sound.preset1.Q.name} source= {sound.preset1.Q.link} keyTrigger = {'Q'} handler={displayHandler} power={power}/>
          <DrumPad name={sound.preset1.W.name} source= {sound.preset1.W.link} keyTrigger = {'W'} handler={displayHandler} power={power}/>
          <DrumPad name={sound.preset1.E.name} source= {sound.preset1.E.link} keyTrigger = {'E'} handler={displayHandler} power={power}/>
        </div>
        <div className="row">
          <DrumPad name={sound.preset1.A.name} source = {sound.preset1.A.link} keyTrigger = {'A'} handler={displayHandler} power={power}/>
          <DrumPad name={sound.preset1.S.name} source = {sound.preset1.S.link} keyTrigger = {'S'} handler={displayHandler} power={power}/>
          <DrumPad name={sound.preset1.D.name} source = {sound.preset1.D.link} keyTrigger = {'D'} handler={displayHandler} power={power}/>
          
        </div>
        <div className="row">
          <DrumPad name={sound.preset1.Z.name} source = {sound.preset1.Z.link} keyTrigger = {'Z'} handler={displayHandler} power={power}/>
          <DrumPad name={sound.preset1.X.name} source = {sound.preset1.X.link} keyTrigger = {'X'} handler={displayHandler} power={power}/>
          <DrumPad name={sound.preset1.C.name} source = {sound.preset1.C.link} keyTrigger = {'C'} handler={displayHandler} power={power}/>

        </div>
      </div>
    </div>
  );
}

export default App;
