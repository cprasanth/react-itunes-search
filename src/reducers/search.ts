import { AnyAction } from 'redux';

export interface SearchState {
  loading: boolean;
  data: { resultCount?: number; results?: [] };
  appendAll: boolean;
}

const initialState: SearchState = {
  loading: false,
  data: {},
  appendAll: false,
};

export const searchReducer = (
  state: SearchState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case 'SEARCH_ITUNES':
      return {
        ...state,
        loading: true,
        appendedAll: false,
      };
    case 'SEARCH_ITUNES_APPEND':
      return {
        ...state,
        loading: true,
        appendedAll: false,
      };
    case 'SEARCH_ITUNES_SUCCESS':
      return {
        ...state,
        data: { ...action.itunesData.data },
        loading: false,
      };
    case 'SEARCH_ITUNES_APPEND_SUCCESS':
      return {
        ...state,
        data: {
          resultCount:
            state.data.resultCount + action.itunesData.data.resultCount,
          results:
            state.data.results &&
            state.data.results.concat(action.itunesData.data.results),
        },
        loading: false,
        appendedAll: action.itunesData.data.resultCount === 10 ? false : true,
      };
    case 'CLEAR_SEARCH_RESULTS':
      return {
        ...state,
        data: { resultCount: 0, results: [] },
        appendedAll: false,
      };
    case 'SEARCH_ITUNES_FAILED':
      return { ...state, data: {}, loading: false, appendedAll: false };
    default:
      return state;
  }
};
