export const bootState = (state: boolean) => {
    return {
        type: 'CHANGE_STATE',
        state
    }
};