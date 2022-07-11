import React from "react";

export default function Fact(props) {
  return (
    <div
	style={{
		padding: '50px',
	}}
	>
      <img src={`${props.item.image}`}  />
      <p>{props.item.fact}</p>
    </div>
  );
}
