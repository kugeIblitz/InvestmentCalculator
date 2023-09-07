import { useState } from "react";

function CalculatorForm(props) {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  function inputHandler(identifier, value) {
    if (identifier === "current-savings") {
      setCurrentSavings(value);
    } else if (identifier === "yearly-contribution") {
      setYearlyContribution(value);
    } else if (identifier === "expected-return") {
      setExpectedReturn(value);
    } else {
      setDuration(value);
    }
  }

  function SubmitHandler(event) {
    event.preventDefault();
    const formData = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };

    props.SetFormData(formData);
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  }

  function reset() {
    props.reset();
  }

  return (
    <form className="form" onSubmit={SubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={(event) => {
              inputHandler("current-savings", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={(event) => {
              inputHandler("yearly-contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={(event) =>
              inputHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(event) => {
              inputHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={reset} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
export default CalculatorForm;
