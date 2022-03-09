import React from "react";
import "./Page.css";

const Page = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{props.text}</h1>
    </div>
  );
};

export default Page;
