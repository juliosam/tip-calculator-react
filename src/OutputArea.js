import OutputTip from "./OutputTip.js";
import OutputBill from "./OutputBill.js";

const OutputArea = () => {
    return ( 
        <div className="output-area">
            <OutputBill/>
            <OutputTip/>
        </div>
     );
}
 
export default OutputArea;