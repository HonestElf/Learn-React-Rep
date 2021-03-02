import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';

const EMPTY = 'placeholder';

const mapStateToProps = state => {
  return {
    deliveryExpanse: state.budget.deliveryExpanse,
    farmExpanse: state.budget.farmExpanse,
    profit: state.budget.profit,
    marketExpanse: state.budget.marketExpanse
  };
};

const Budget = props => {
  const { profit, deliveryExpanse, farmExpanse, marketExpanse } = props;

  return (
    <div className="budget">
      <h2>Бюджет</h2>
      <p>Всего получено денег: {profit}</p>
      <p>Расходы продавцов: {marketExpanse}</p>
      <p>Расходы на ферме: {farmExpanse}</p>
      <p>Расходы на доставку: {deliveryExpanse}</p>
      <p>Итого: {profit - farmExpanse - deliveryExpanse - marketExpanse}</p>
    </div>
  );
};
export default connect(mapStateToProps)(Budget);
