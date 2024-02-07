import "./App.css";
import Buttons from "./components/Buttons";
import Change from "./components/Change";
import Header from "./components/Header";
import WeekChart from "./components/WeekChart";
import YearChart from "./components/YearChart";

function App() {
  return (
    <>
      <Header />
      <Buttons />
      <div className="md:flex lg:flex">
        <WeekChart />
        <YearChart />
      </div>
      <Change />
    </>
  );
}

export default App;
