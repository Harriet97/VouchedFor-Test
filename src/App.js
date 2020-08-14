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
          showVote: true,
        })
      : Object.assign(data, { savings: 0, showVote: true });

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
    });
  };

  // incomeChange = (e) => {
  //   const index = this.state.incomes.findIndex((x) => x.name === e.target.id);
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   console.log(this.state.incomes[index][name]);

  //   this.setState(
  //     (prevState) => ({
  //       incomes: {
  //         ...prevState.incomes,
  //         [prevState.incomes[index][name]]: value,
  //       },
  //     }),

  //     () => {
  //       localStorage.setItem("data", JSON.stringify(this.state));
  //       this.calculateSavings();
  //     }
  //   );
  // };

  incomeChange = (e) => {
    const index = this.state.incomes.findIndex((x) => x.name === e.target.id);
    this.state.incomes[index][e.target.name] = e.target.value;

    this.setState(
      {
        incomes: this.state.incomes,
      },
      () => {
        localStorage.setItem("data", JSON.stringify(this.state));
        this.calculateSavings();
      }
    );
  };

  expenditureChange = (e) => {
    console.log(e);
    const index = this.state.expenditures.findIndex(
      (x) => x.name === e.target.id
    );
    this.state.expenditures[index][e.target.name] = e.target.value;

    this.setState(
      {
        expenditures: this.state.expenditures,
      },
      () => {
        localStorage.setItem("data", JSON.stringify(this.state));
        this.calculateSavings();
      }
    );
  };

  render() {
    return (
      <div className="App">
        <div className="header"></div>
        <CardDeck className="cardDeck">
          <YourIncome
            incomeChange={this.incomeChange}
            expenditureChange={this.expenditureChange}
            incomes={this.state.incomes}
            expenditures={this.state.expenditures}
          />
          <SpendingCal
            expenditures={this.state.expenditures}
            savings={this.state.savings}
            expenditureChange={this.expenditureChange}
          />
        </CardDeck>
      </div>
    );
  }
}

export default App;
