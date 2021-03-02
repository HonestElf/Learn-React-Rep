import React, { Component } from 'react';
import './Market.css';
import Order from '../Order';
import { connect } from 'react-redux';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

const mapStateToProps = state => {
  return {
    orders: state.market.orders
  };
};

class Market extends Component {
  sendOrderHandler = () => {
    const { moveOrderToFarm, orders } = this.props;
    const lastOrder = orders[orders.length - 1];
    moveOrderToFarm(lastOrder);
  };

  createOrderHandler = () => {
    const { createOrder } = this.props;
    const newOrder = getNewOrder();
    createOrder(newOrder);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="market">
        <h2>Заказ в магазине</h2>
        <button onClick={this.createOrderHandler}>Создать заказ</button>
        <button disabled={!orders.length} onClick={this.sendOrderHandler}>
          Отправить заказ на ферму
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
)(Market);
