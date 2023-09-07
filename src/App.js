import logo from "./assets/investment-calculator-logo.png";
import CalculatorForm from "./components/CalculatorForm";
import ResultTable from "./components/ResultTable";
import { useState } from "react";
function App() {
  const [userData, setUserData] = useState({
    currentSavings: 0,
    yearlyContribution: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function getFormData(UserData) {
    setUserData(UserData);
  }

  function isEmpty(obj) {
    if (
      obj.currentSavings === 0 ||
      obj.yearlyContribution === 0 ||
      obj.expectedReturn === 0 ||
      obj.duration === 0
    )
      return false;
    return true;
  }

  function resetHandler() {
    isEmpty([]);
  }

  return (
    <div>
      <header className='header'>
        <img src={logo} alt='logo' />
        <h1>Investment Calculator</h1>
      </header>

      <CalculatorForm SetFormData={getFormData} reset={resetHandler} />

      {!isEmpty(userData) ? (
        <p></p>
      ) : (
        <ResultTable
          currentSavings={userData.currentSavings}
          yearlyContribution={userData.yearlyContribution}
          expectedReturn={userData.expectedReturn}
          duration={userData.duration}
        />
      )}
    </div>
  );
}

export default App;
