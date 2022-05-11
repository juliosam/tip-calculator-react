import { useState } from "react";

const ButtonArea = (props) => {

    const [percent, setPercent] = useState(0.1);

    const pickPercent = (e)=>{
        const porcento = Number(e.target.value)
        setPercent(porcento)
        console.log(percent)
        // sera con props y/o con hooks?
    }

    const writePercent = (e) =>{
        const porcento = Number(e.target.value/100)
        setPercent(porcento)
        console.log(percent)
    }

    return ( 
        <div className="button-area" onClick={pickPercent} >
          <span>Select Tip %</span>
          <button value={0.05}>5%</button>
          <button value={0.1}>10%</button>
          <button value={0.15}>15%</button>
          <button value={0.25}>25%</button>
          <button value={0.5}>50%</button>
          <input placeholder="Custom" onInput={writePercent} ></input>
        </div>
     )
}
 
export default ButtonArea;