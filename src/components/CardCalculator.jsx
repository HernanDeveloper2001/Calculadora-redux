import "../styles/cardCalculator.scss"
import ContainerButtons from "./CardComponents/ContainerButtons";
import FormulaScreen from "./CardComponents/FormulaScreen";
import OutputScreen from "./CardComponents/OutputScreen";

const CardCalculator = () => {
  return (
    <div className="calculator">
      <FormulaScreen />
      <OutputScreen />
      <ContainerButtons />
    </div>
  )
}

export default CardCalculator