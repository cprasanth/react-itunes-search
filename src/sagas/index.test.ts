import { expectSaga } from 'redux-saga-test-plan';
import { searchItunesSaga, searchItunesAppendSaga } from './index';
import * as actions from '../actions';

const mockApi = jest.fn();
const mockPayload = {
  foo: 'bar',
};
describe('Search itunes saga', () => {
  beforeEach(() => {
    mockApi.mockReset();
  });
  it('should return album details', () => {});
});
