export const exist = (state , id) => {
    const result = !!state.find(item => item.id == id);
    return result;
}