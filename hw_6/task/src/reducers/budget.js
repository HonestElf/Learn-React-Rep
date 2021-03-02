import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

const initState = {
  deliveryExpanse: 0,
  profit: 0,
  farmExpanse: 0,
  marketExpanse: 0
};

const EXPENCE_DELIVERY = 20;
const EXPENCE_MARKET = 20;
const EXPENCE_FARM = 100;

const budget = (state = initState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpanse: state.deliveryExpanse + EXPENCE_DELIVERY
      };

    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit + action.payload.price,
        marketExpanse: state.marketExpanse + EXPENCE_MARKET
      };

    case MOVE_ORDER_TO_FARM:
      return { ...state, farmExpanse: state.farmExpanse + EXPENCE_FARM };

    default:
      return state;
  }
};

export default budget;
