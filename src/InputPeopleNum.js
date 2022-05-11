import { useState } from "react";

const InputPeopleNum = () => {

    const [peoplenum, setPeoplenum] = useState(0);

    const people = (e) => {
        console.log(e.target.value)
        setPeoplenum(e.target.value)
    }

    return ( 
        <div className="input-people-num">
          <span>Number of People</span>
          <input  placeholder="0" onInput={people}></input>
        </div>
     );
}
 
export default InputPeopleNum;