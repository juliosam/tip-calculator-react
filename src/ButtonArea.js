import PercentButton from "./PercentButton.js";

const ButtonArea = () => {
    return ( 
        <div className="button-area">
        <span>Select Tip %</span>
        <PercentButton>5%</PercentButton>
        <PercentButton>10%</PercentButton>
        <PercentButton>15%</PercentButton>
        </div>
     )
}
 
export default ButtonArea;