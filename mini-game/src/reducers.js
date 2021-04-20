import {handleActions} from 'redux-actions';
import {
  changePosition,
  gameOver,
  tutorial1End,
} from './actions';
import {combineReducers} from 'redux';

const position = handleActions(
  {
    [changePosition]: (state, action) => action.payload,
  },
  {x: 0, y: 0},
);

const isGameOver = handleActions(
  {
    [gameOver]: () => true,
  },
  false,
);

const exitPosition = handleActions({}, {x: 9, y: 9});

const tutorial1 = handleActions(
  {
    [tutorial1End]: () => true,
  },
  false,
);

export default combineReducers({
  position,
  isGameOver,
  exitPosition,
  tutorial1,
});

export const getPosition = state => state.position;
export const getExitPosition = state => state.exitPosition;
export const getIsGameOver = state => state.isGameOver;
export const getIsTutorial1End = state => state.tutorial1
