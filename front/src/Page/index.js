import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import "./Page.css";

const Page = () => {
  const [count, setCount] = useState([0]);
  const [count2, setCount2] = useState([0]);
  const [totalCount, setTotalCount] = useState(count + count2);

  const IncrementByOne = () => {
    setCount((count) => count + 1);
  };

  const IncrementByTwo = () => {
    setCount((count) => count + 2);
  };

  const IncrementByThree = () => {
    setCount((count) => count + 3);
  };

  const IncrementByFour = () => {
    setCount((count) => count + 4);
  };

  const IncrementByFive = () => {
    setCount((count) => count + 5);
  };

  const IncrementBySix = () => {
    setCount((count) => count + 6);
  };

  const IncrementBySeven = () => {
    setCount((count) => count + 7);
  };

  const IncrementByEight = () => {
    setCount((count) => count + 8);
  };

  const IncrementByNine = () => {
    setCount((count) => count + 9);
  };

  const IncrementByZero = () => {
    setCount((count) => count + 0);
  };

  const testButton = <button onClick={() => setCount([0])}>Reset</button>;
  return (
    <div>
      <Card
        title={count}
        extra={testButton}
        style={{
          position: "fixed",
          left: "45%",
          top: "30%",
          width: 200,
          borderRadius: 30,
          borderWidth: "thick",
          borderColor: "grey",
        }}
        bordered={true}
      >
        <div style={{ marginBottom: 30 }}>
          <button>+</button>
          <button style={{ marginLeft: 10 }}>-</button>
          <button style={{ marginLeft: 10 }}>*</button>
          <button style={{ marginLeft: 10 }}>/</button>
        </div>
        <Row gutter={16}>
          <Col style={{ marginBottom: 30 }} span={7}>
            <button onClick={IncrementByOne}>1</button>
          </Col>
          <Col style={{ marginBottom: 30 }} span={7}>
            <button onClick={IncrementByTwo}>2</button>
          </Col>
          <Col style={{ marginBottom: 30 }} span={7}>
            <button onClick={IncrementByThree}>3</button>
          </Col>
          <Col style={{ marginBottom: 30 }} span={7}>
            <button onClick={IncrementByFour}>4</button>
          </Col>
          <Col style={{ marginBottom: 30 }} span={7}>
            <button onClick={IncrementByFive}>5</button>
          </Col>
          <Col style={{ marginBottom: 30 }} span={7}>
            <button onClick={IncrementBySix}>6</button>
          </Col>
          <Col style={{ marginBottom: 30 }} span={7}>
            <button onClick={IncrementBySeven}>7</button>
          </Col>
          <Col style={{ marginBottom: 30 }} span={7}>
            <button onClick={IncrementByEight}>8</button>
          </Col>
          <Col style={{ marginBottom: 30 }} span={7}>
            <button onClick={IncrementByNine}>9</button>
          </Col>
          <button style={{ marginLeft: 25 }} onClick={IncrementByZero}>
            0
          </button>
          <button style={{ marginLeft: 30 }} onClick={IncrementByZero}>
            =
          </button>
        </Row>
      </Card>
    </div>
  );
};

export default Page;
