import { useState } from 'react';
import TipResult from './TipResult.js';
import TotalResult from './TotalResult.js';
import iconDollar from './images/icon-dollar.svg'
import iconPerson from './images/icon-person.svg'

function App() {

  const [bill , setBill] = useState(0);
  const billin = (e)=>{
    const cuenton = Number(e.target.value)
    setBill(cuenton)
  }

  const [percent, setPercent] = useState(0.1);
    const pickPercent = (e)=>{
        const porcento = Number(e.target.value)
        setPercent(porcento)
    }

    const writePercent = (e) =>{
        const porcento = Number(e.target.value/100)
        setPercent(porcento)
    }

    const [peoplenum, setPeoplenum] = useState(0);
    const people = (e) => {
        const persones = Number(e.target.value)
        setPeoplenum(persones)
    }

    const reset = () =>{
      window.location.reload()
    }

  return (
    <div className="App">
      <div className='content'>
        <div className="input-area">
          <div className="bill-input">
            <span>Bill</span>
            <img src={iconDollar} alt='mmmoney'></img>
            <input min={1} placeholder="0" onInput={billin}/>
          </div>
          <div className="button-area" onClick={pickPercent} >
            <span>Select Tip %</span>
            <button value={0.05}>5%</button>
            <button autoFocus value={0.1}>10%</button>
            <button value={0.15}>15%</button>
            <button value={0.25}>25%</button>
            <button value={0.5}>50%</button>
            <input placeholder="Custom" onInput={writePercent} ></input>
          </div>
          <div className="input-people-num">
            <span>Number of People</span>
            <img src={iconPerson} alt='peoplee'></img>
            <input  placeholder="0" onInput={people}></input>
          </div>
        </div>
        <div className="output-area">
          <TipResult percent={percent} bill={bill} peoplenum={peoplenum} />
          <TotalResult bill={bill} peoplenum={peoplenum}/>
          <button onClick={reset}>RESET</button>
        </div>
      </div>  
    </div>
  );
}

export default App;
