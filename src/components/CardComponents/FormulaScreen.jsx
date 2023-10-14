import "../../styles/formulaScreen.scss"
import { useSelector } from "react-redux"

const FormulaScreen = () => {

  const state = useSelector(state => state.storeMath);

  return (
    <div className="formulaScreen">
      {state.value2}
    </div>
  )
}

export default FormulaScreen
