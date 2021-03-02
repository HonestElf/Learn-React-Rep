import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

const initState = {
  orders: []
};

const farm = (state = initState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { ...state, orders: [...state.orders, action.payload] };

    case MOVE_ORDER_TO_CUSTOMER:
      const ordersLength = state.orders.lenght;
      return { ...state, orders: [...state.orders.slice(0, ordersLength - 1)] };
    default:
      return state;
  }
};

export default farm;
