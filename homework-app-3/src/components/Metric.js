import React from "react";

export const Metric = (props) => {
  return (
    <article style={{ width: "180px" }}>
      <div style={{ textAlign: "center", color: "black", fontSize: "15px" }}>
        {props.name}
      </div>
      <div
        style={{
          textAlign: "center",
          color: "black",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        {props.value}
      </div>
    </article>
  );
};
