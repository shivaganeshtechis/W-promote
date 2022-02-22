import { createSelector } from 'reselect';

const PatentSelector = state => state.patents;
export const getPatents = createSelector([PatentSelector], state => state);
