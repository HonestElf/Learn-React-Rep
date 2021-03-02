import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

const initState = {
  orders: []
};
const market = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { state, orders: [...state.orders, action.payload] };

    case MOVE_ORDER_TO_FARM:
      const ordersLength = state.orders.length;
      return { state, orders: [...state.orders.slice(0, ordersLength - 1)] };

    default:
      return state;
  }
};

export default market;
