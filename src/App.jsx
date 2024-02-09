import Buttons from "./components/Buttons";
import PriceChange from "./components/PriceChange";
import Header from "./components/Header";
import Charts from "./components/Charts";
import PercentageRates from "./components/PercentageRates";
import ChangeInDollars from "./components/ChangeInDollars";

function App() {
  return (
    <>
      <Header />
      <Buttons />
      <Charts />
      <PriceChange />
      <PercentageRates />
      <ChangeInDollars />
    </>
  );
}

export default App;
