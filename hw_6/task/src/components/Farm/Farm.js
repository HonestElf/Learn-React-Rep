import React, { Component } from 'react';
import './Farm.css';
import { moveOrderToCustomer } from '../../actions/farmActions';
import { connect } from 'react-redux';
import Order from '../Order';

const mapDispatchToProps = {
  moveOrderToCustomer
};

const mapStateToProps = state => ({ orders: state.farm.orders });

class Farm extends Component {
  sendOrderHandler = () => {
    const { orders, moveOrderToCustomer } = this.props;
    const lastOrder = orders[orders.length - 1];
    moveOrderToCustomer(lastOrder);
  };
  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2>Товары на ферме</h2>
        <button disabled={!orders.length} onClick={this.sendOrderHandler}>
          Отправить клиенту
        </button>
        <div className="order__list">
          {orders.map(item => {
            return <Order name={item.name} price={item.price} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
