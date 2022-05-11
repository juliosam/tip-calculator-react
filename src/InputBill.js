import { useState } from "react";

const InputBill = () => {

  const [bill , setBill] = useState(0);

  const billin = (e)=>{
    console.log(e.target.value)
    setBill(e.target.value)
  }
    return ( 
        <div className="bill-input">
          <span>Bill</span>
          <input value={bill.num1} placeholder="0" onInput={billin}/>
        </div>
     );
}
 
export default InputBill;