import React from "react";

export const Metric = (props) => {
  return (
    <article style={{ width: "100%", textAlign: "center" }}>
      <p>{props.label}</p>
      <p style={{ fontSize: 40, fontWeight: "bold", lineHeight: 0.1 }}>
        {props.value || 0}
      </p>
    </article>
  );
};
