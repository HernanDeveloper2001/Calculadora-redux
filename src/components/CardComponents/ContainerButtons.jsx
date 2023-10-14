import Buttons from "./Buttons"
import "../../styles/ContainerButtons.scss"
import { useDispatch } from "react-redux"
import { agregarNumero,returnInitialState,operation } from "../../features/math/mathSlice"

const ContainerButtons = () => {

  const dispatch = useDispatch()


  //function add numbers
  function handlerNumber({ target }) {
    const { value } = target;
    dispatch(agregarNumero(value))
  }

  //function intial state
  function handleInitialState({target}){
    const {value} = target;
    dispatch(returnInitialState(value))
  }

  function handleOperation(operador){
    dispatch(operation(operador))
    
  }

  return (
    <div id='containerButtons'>
      <Buttons 
      handlerNumber={handlerNumber}
      handleOperation={handleOperation}
      handleInitialState={handleInitialState} />
    </div>
  )
}

export default ContainerButtons