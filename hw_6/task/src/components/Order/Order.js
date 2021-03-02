import React from 'react';
import './Order.css';

const Order = props => {
  const { name, price, createdAt } = props;

  return (
    <div className="order">
      <div className="order__upper">
        <p>Название: {name}</p>
        <p>Цена: {price}</p>
      </div>
      <div className="order__lower" />
    </div>
  );
};

export default Order;
