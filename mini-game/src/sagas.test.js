import {tutorial1} from './sagas';
import {
  moveRight,
  moveLeft,
  moveDown,
  tutorial1End,
} from './actions';
import {take, put} from 'redux-saga/effects';
/*
export function* tutorial1() {
  const condition = {right: 0, down: 0};

  while (condition.right < 3 || condition.down < 1) {
    const action = yield take([moveRight, moveDown]);

    if (action.type === moveRight.toString())
      condition.right += 1;
    else if (action.type === moveDown.toString())
      condition.down += 1;
  }

  yield put(tutorial1End());
}
*/

describe('Tutorial 1 saga', () => {
  const saga = tutorial1();
  it('1 step: take `moveRight`, `moveDown`', () => {
    expect(saga.next({type: 'SOME_TYPE'}).value).toEqual(
      take([moveRight, moveDown]),
    );
  });
  it('satisfy condition ', () => {
    saga.next({type: moveRight.toString()});
    saga.next({type: moveRight.toString()});
    saga.next({type: moveRight.toString()});
    expect(
      saga.next({type: moveDown.toString()}).value,
    ).toEqual(put(tutorial1End()));
  });
});
