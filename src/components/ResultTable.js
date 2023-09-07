import {useState} from'react';

function ResultTable(userInput) {

  const yearlyData = [];

  let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
  const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput.expectedReturn / 100;
  const duration = +userInput.duration;

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }

  function reset() {
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((data) => (
          <tr>
            <td>{data.year}</td>
            <td>{data.savingsEndOfYear}</td>
            <td>{data.yearlyInterest}</td>
            <td>{data.yearlyContribution}</td>
            <td>{}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ResultTable;
