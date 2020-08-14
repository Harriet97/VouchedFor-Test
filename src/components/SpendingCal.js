import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SpendingCal = (props) => {
  return (
    <Card border="info" className="card " style={{ textAlign: "center" }}>
      <h4 className="cardHeader">SPEND LESS</h4>
      <Card.Body>
        <h6>
          Try reducing your monthly spending to see how your forecast could
          improve!
        </h6>
        <table style={{ textAlign: "left" }}>
          <tbody>
            {props.expenditures.map((expenditure) => (
              <tr>
                <td style={{ padding: "20px" }}>
                  <label>{expenditure.name}</label>
                </td>
                <td style={{ width: "25vw" }}>
                  <input
                    style={{ width: "100%" }}
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
          style={{ padding: "10px" }}
          variant="outline-success"
          size="sm"
          href="https://www.vouchedfor.co.uk/"
        >
          Find ways to save
        </Button>
      </Card.Body>
      {!props.voted && (
        <Card.Footer>
          <Row>
            <Col className="text-right">
              <a
                href=""
                style={{ color: "#0a787c", textAlign: "right", padding: "2%" }}
              >
                Was this helpful?
              </a>
              <a
                href="#"
                style={{ color: "green", padding: "2%", textAlign: "right" }}
                onClick={() => props.vote("yes")}
              >
                <ion-icon
                  style={{ verticalAlign: "middle", fontSize: "2em" }}
                  name="thumbs-up-outline"
                ></ion-icon>
              </a>
              <a
                href="#"
                onClick={() => props.vote("no")}
                style={{ color: "#0a787c", textAlign: "right" }}
              >
                <ion-icon
                  style={{ verticalAlign: "middle", fontSize: "2em" }}
                  name="thumbs-down-outline"
                ></ion-icon>
              </a>
            </Col>
          </Row>
        </Card.Footer>
      )}
    </Card>
  );
};

export default SpendingCal;
