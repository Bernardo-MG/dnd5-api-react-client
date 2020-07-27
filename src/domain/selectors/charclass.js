const selectDomain = (state) => state.domain;

export const selectCharClass = (id) => (state) => selectDomain(state).charclasses[id];

export const selectCharClassList = (state) => Object.values(selectDomain(state).charclasslist);
