import { useState } from 'react';
import TipResult from './TipResult.js';
import TotalResult from './TotalResult.js';
import iconDollar from './images/icon-dollar.svg'
import iconPerson from './images/icon-person.svg'
import PercentTip from './PercentTip.js';

function App() {

  const [bill , setBill] = useState(0);

  const billin = (e)=>{
    const cuenton = Number(e.target.value)
    if( isNaN(cuenton) ){
      e.target.previousSibling.classList.remove("error");
      e.target.value = e.target.value.substring(0, e.target.value.length-1)
    }
    else {
       e.target.previousSibling.classList.add("error");
      setBill(cuenton)
    }}

  const [percent, setPercent] = useState(0.1);
    
    const [peoplenum, setPeoplenum] = useState(0);
    const people = (e) => {
        const persones = Number(e.target.value)
        if( isNaN(persones) ){
          e.target.previousSibling.classList.remove("error2");
          e.target.value = e.target.value.substring(0, e.target.value.length-1)
        } 
        else {
           e.target.previousSibling.classList.add("error2");
        setPeoplenum(persones)
    }}

    const reset = () =>{
      window.location.reload()
    }

  return (
    <div className="App">
      <span className='spli'>SPLI</span>
      <span className='tter'>TTER</span>
      <div className='content'>
        <div className="input-area">
          <div className="bill-input">
            <span>Bill</span>
            <p className='error'>Numeric value needed</p>
            <input min={1} placeholder="0" onInput={billin}/>
            <img src={iconDollar} alt='mmmoney'></img>
          </div>
          <PercentTip setPercent={setPercent}/>
          <div className="input-people-num">
            <span>Number of People</span>
            <p className='error2'>Numeric value needed</p>
            <input  placeholder="0" onInput={people}></input>
            <img src={iconPerson} alt='peoplee'></img>
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
