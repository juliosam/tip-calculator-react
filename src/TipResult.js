const TipResult = ({percent, bill, peoplenum}) => {
    if( peoplenum === 0 || bill === 0){
        return ( 
            <div className="tip-result">
                <div>
                   <span>Tip Amount</span>
                   <span>/ person</span>
                 </div>
                 <output>{"$0.00"}</output>
            </div>)}
    
    return ( 
        <div className="tip-result">
            <div>
               <span>Tip Amount</span>
               <span>/ person</span>
             </div>
             <output>{"$"+(percent*bill/peoplenum).toFixed(2)}</output>
        </div>
     );
}
 
export default TipResult;