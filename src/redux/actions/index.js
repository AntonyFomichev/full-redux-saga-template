export const fetchFilters = {
  FETCH_FILTERS_START: 'FETCH_FILTERS_START',
  FETCH_FILTERS_SUCCESS: 'FETCH_FILTERS_SUCCESS',
  FETCH_FILTERS_FAILED: 'FETCH_FILTERS_FAILED',
};

export const fetchFiltersStart = () => ({
  type: fetchFilters.FETCH_FILTERS_START
});

export const fetchFiltersSuccess = (filters) => ({
  type: fetchFilters.FETCH_FILTERS_SUCCESS,
  payload: {filters},
});

export const fetchFiltersFailed = (error) => ({
  type: fetchFilters.FETCH_FILTERS_FAILED,
  payload: {error},
});