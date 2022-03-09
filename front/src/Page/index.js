import React, { useState } from "react";
import { Card } from "antd";
import "./Page.css";

const Page = (props) => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((count) => count + 1);
  };

  const Decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{props.text}</h1>
      <Card
        title={count}
        extra="Reset"
        style={{ position: "fixed", left: "50%", top: "40%", width: 300 }}
        bordered={true}
      >
        <button onClick={Increment}>1</button>
        <button onClick={Decrement}>-1</button>
      </Card>
    </div>
  );
};

export default Page;
