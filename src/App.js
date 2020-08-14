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

  render() {
    return (
      <div className="App">
        <div className="header"></div>
        <CardDeck className="cardDeck">
          <YourIncome
            incomeChange={this.incomeChange}
            incomes={this.state.incomes}
            expenditures={this.state.expenditures}
          />
          <SpendingCal
            expenditures={this.state.expenditures}
            savings={this.state.savings}
          />
        </CardDeck>
      </div>
    );
  }
}

export default App;
