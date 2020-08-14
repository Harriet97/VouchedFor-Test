import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

const SpendingCal = (props) => {
  return (
    <Card border="info" className="card" style={{ textAlign: "left" }}>
      <Card.Header
        style={{
          textAlign: "center",
          backgroundColor: "#07576a",
          color: "white",
          fontWeight: "bold",
          padding: "10px",
        }}
      >
        <h4>SPEND LESS</h4>
      </Card.Header>
      <Card.Body>
        <p style={{ textAlign: "center" }}>
          Try reducing your monthly spending to see how your forecast could
          improve!
        </p>
        <table>
          <tbody>
            {props.expenditures.map((expenditure) => (
              <tr>
                <td style={{ padding: "20px" }}>
                  <label>{expenditure.name}</label>
                </td>
                <td>
                  <input
                    style={{ width: "350px" }}
                    className="slider"
                    type="range"
                    name="amount"
                    value={expenditure.amount}
                    id={expenditure.name}
                    min="0"
                    max={props.income}
                    step="1"
                    onChange={props.expenditureChange}
                  ></input>
                </td>
                <td style={{ textAlign: "right" }}>{expenditure.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h6 style={{ padding: "20px" }}>
          This means you're saving{" "}
          <span style={{ color: "#6db91c" }}>£{props.savings}</span> per month
        </h6>
        <Button
          style={{ padding: "10px", textAlign: "center" }}
          variant="outline-success"
          size="sm"
          href="https://www.vouchedfor.co.uk/"
        >
          Find ways to save
        </Button>
      </Card.Body>

      <Card.Footer>Was this helpful?</Card.Footer>
    </Card>
  );
};

export default SpendingCal;
