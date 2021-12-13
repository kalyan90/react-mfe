import React from "react";

export default function ViewOrder(props) {
  const { orderId } = props.match.params;
  const imageUrl = `https://cataas.com/cat/says/${orderId}`;

  return (
    <div>
      <header>
        <h3>View Order Details</h3>
        <h4>{ orderId }</h4>
        {!orderId ? (
          <div>Loading...</div>
        ) : (
          <div>
            <img src={imageUrl} width="400px" alt="Image" />
          </div>
        )}
      </header>
    </div>
  );
}