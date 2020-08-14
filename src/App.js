import React, { Component } from "react";
import "./App.css";
import SpendingCal from "./components/SpendingCal";
import YourIncome from "./components/YourIncome";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import data from "./data";

class App extends Component {
  state =
    JSON.parse(localStorage.getItem("data")) !== null
      ? Object.assign(JSON.parse(localStorage.getItem("data")), {
          savings: 0,
          voted: false,
        })
      : Object.assign(data, { savings: 0, voted: false });

  componentDidMount() {
    this.calculateSavings();
  }

  calculateSavings = () => {
    const monthlyIncome =
      this.state.incomes.reduce(function (accumulator, currentIncome) {
        return accumulator + parseInt(currentIncome.amount);
      }, 0) / 12;

    const expenditures = this.state.expenditures.reduce(function (
      accumulator,
      currentExpenditure
    ) {
      return accumulator + parseInt(currentExpenditure.amount);
    },
    0);

    const savings = parseInt(monthlyIncome - expenditures);

    this.setState({
      savings: savings,
      monthlyIncome: monthlyIncome,
    });
  };

  incomeChange = (e) => {
    const index = this.state.incomes.findIndex(
      (inc) => inc.name === e.target.id
    );
    const value = e.target.value;
    const name = e.target.name;

    this.setState(
      (prevState) => {
        const newIncomes = [...prevState.incomes];
        newIncomes[index][name] = value;
        return { incomes: newIncomes };
      },
      () => {
        localStorage.setItem("data", JSON.stringify(this.state));
        this.calculateSavings();
      }
    );
  };

  expenditureChange = (e) => {
    const index = this.state.expenditures.findIndex(
      (exp) => exp.name === e.target.id
    );
    const value = e.target.value;
    const name = e.target.name;

    this.setState(
      (prevState) => {
        const newExpenditures = [...prevState.expenditures];
        newExpenditures[index][name] = value;
        return { expenditures: newExpenditures };
      },
      () => {
        localStorage.setItem("data", JSON.stringify(this.state));
        this.calculateSavings();
      }
    );
  };

  vote = (vote) => {
    this.setState({
      voted: true,
    });
    alert(`Thank you for voting ${vote}`);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h5 className="headerText">Your Financial Plan</h5>
        </div>
        <CardDeck className="cardDeck">
          <div class="col d-flex justify-content-center">
            <YourIncome
              incomeChange={this.incomeChange}
              expenditureChange={this.expenditureChange}
              incomes={this.state.incomes}
              expenditures={this.state.expenditures}
            />
          </div>
          <div class="col d-flex justify-content-center">
            <SpendingCal
              income={this.state.monthlyIncome}
              expenditures={this.state.expenditures}
              savings={this.state.savings}
              expenditureChange={this.expenditureChange}
              vote={this.vote}
              voted={this.state.voted}
            />
          </div>
        </CardDeck>
      </div>
    );
  }
}

export default App;
