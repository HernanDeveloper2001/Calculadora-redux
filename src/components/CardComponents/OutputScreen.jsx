import "../../styles/outputScreen.scss"
import { useSelector } from "react-redux";

const OutputScreen = () => {

  const state = useSelector(state => state.storeMath);


  return (
    <div className="outputScreen">{state.value1}</div>
  )
}

export default OutputScreen