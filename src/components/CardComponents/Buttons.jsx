import "../../styles/buttons.scss"
import {PropTypes} from "prop-types"


const Buttons = ({handlerNumber,handleInitialState,handleOperation}) => {
  return (
    <>
      <button 
        id="jumbo" 
        className="button-AC" 
        onClick={handleInitialState}
        value="0">AC</button>
      <button 
        id="divide"
        className="button-equals" 
        onClick={handlerNumber}
        value="/">/</button>
      <button 
        id="multiply" 
        className="button-equals" 
        onClick={handlerNumber}
        value="*">X</button>
      <button 
        onClick={handlerNumber} 
        id="seven" 
        className="button-number" 
        value="7">7</button>
      <button 
        onClick={handlerNumber} 
        id="eight" 
        className="button-number" 
        value="8">8</button>
      <button 
        onClick={handlerNumber} 
        id="nine" 
        className="button-number" 
        value="9">9</button>
      <button 
        id="subtract" 
        className="button-equals" 
        onClick={handlerNumber}
        value="-">-</button>
      <button 
        onClick={handlerNumber} 
        id="four" 
        className="button-number" 
        value="4">4</button>
      <button 
        onClick={handlerNumber} 
        id="five" 
        className="button-number" 
        value="5">5</button>
      <button 
        onClick={handlerNumber} 
        id="six" 
        className="button-number" 
        value="6">6</button>
      <button 
        id="add" 
        className="button-equals" 
        onClick={handlerNumber}
        value="+">+</button>
      <button 
        onClick={handlerNumber} 
        id="one" 
        className="button-number" 
        value="1">1</button>
      <button 
        onClick={handlerNumber} 
        id="two" 
        className="button-number" 
        value="2">2</button>
      <button 
        onClick={handlerNumber} 
        id="three" 
        className="button-number" 
        value="3">3</button>
      <button 
        onClick={handlerNumber} 
        id="jumbo" 
        className="button-number" 
        value="0">0</button>
      <button 
        id="decimal" 
        className="button-number" 
        onClick={handlerNumber}
        value=".">.</button>
      <button 
        id="equals"
        className="button-igual" 
        onClick={() => handleOperation("=")}>=</button>
    </>
  )
}

Buttons.propTypes = {
  handlerNumber: PropTypes.func.isRequired,
    handleInitialState: PropTypes.func.isRequired,
    handleOperation: PropTypes.func.isRequired,
}

export default Buttons