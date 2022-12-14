export const quantity = (state , id) => {
    const index = state.findIndex(item => item.id == id);
    return state[index].quantity;
}