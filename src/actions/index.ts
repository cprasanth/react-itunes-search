export const searchItunes = (payload: string) => ({
  type: 'SEARCH_ITUNES',
  payload: payload,
});
export const searchItunesAppend = (payload: string) => ({
  type: 'SEARCH_ITUNES_APPEND',
  payload: payload,
});
export const searchItunesSuccess = () => ({
  type: 'SEARCH_ITUNES_SUCCESS',
});
export const searchItunesFailed = () => ({
  type: 'SEARCH_ITUNES_FAILED',
});
export const clearSearchResults = () => ({
  type: 'CLEAR_SEARCH_RESULTS',
});
