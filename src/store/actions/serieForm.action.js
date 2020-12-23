export const SET_FIELD= 'SET_FIELD';

export const setField = (field, value) => ({
    type: SET_FIELD,
    payload: { field, value}
})
