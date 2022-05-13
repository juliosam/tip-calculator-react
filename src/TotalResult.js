const TotalResult = ({bill, peoplenum}) => {
    if( peoplenum == 0 || bill == 0){
        return ( 
            <div className="total-result">
            <div>
               <span>Total</span>
               <span>/ person</span>
             </div>
             <output>{"$0.00"}</output>
        </div>)}

    return ( 
        <div className="total-result">
            <div>
               <span>Total</span>
               <span>/ person</span>
             </div>
             <output>{"$"+(bill/peoplenum).toFixed(2)}</output>
        </div>
     );
}
 
export default TotalResult;