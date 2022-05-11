
import { useState } from 'react';
import ButtonArea from "./ButtonArea.js";
import InputPeopleNum from "./InputPeopleNum.js";
import InputBill from "./InputBill.js";

function App({}) {

  const [bill , setBill] = useState(0);

  const billin = (e)=>{
    const cuenton = Number(e.target.value)
    setBill(cuenton)
  }

  const [percent, setPercent] = useState(0.1);

    const pickPercent = (e)=>{
        const porcento = Number(e.target.value)
        setPercent(porcento)
        // sera con props y/o con hooks?
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

  return (
    <div className="App">
      <div className='content'>
        <div className="input-area">
          <div className="bill-input">
            <span>Bill</span>
            <input  placeholder="0" onInput={billin}/>
          </div>
          <div className="button-area" onClick={pickPercent} >
            <span>Select Tip %</span>
            <button value={0.05}>5%</button>
            <button value={0.1}>10%</button>
            <button value={0.15}>15%</button>
            <button value={0.25}>25%</button>
            <button value={0.5}>50%</button>
            <input placeholder="Custom" onInput={writePercent} ></input>
          </div>
          <div className="input-people-num">
            <span>Number of People</span>
            <input  placeholder="0" onInput={people}></input>
          </div>
            {/* usare el button area con bubble */}
        </div>
        <div className="output-area">
           <div className="output-tip">
             <div>
               <span>Tip Amount</span>
               <span>/ person</span>
             </div>
             <output>{(percent*bill/peoplenum).toFixed(2)}</output>
           </div>
           <div className="output-bill">
             <div>
               <span>Total</span>
               <span>/ person</span>
             </div>
             <output>{(bill/peoplenum).toFixed(2)}</output>
           </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
