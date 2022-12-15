import React ,  {useReducer} from 'react';

const initilValues = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
};

const sumItems = item => {
    const itemsCounter = item.reduce((acc , cur) => acc + cur.quantity , 0);
    const total = item.reduce((acc , cur) => acc + (cur.price * cur.quantity) , 0).toFixed(2);
    return {itemsCounter , total};
}

const cartReducer  = (state , action) => {
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload , quantity: 1});
            }
            return {...state , selectedItems: [...state.selectedItems] , ...sumItems(state.selectedItems) , checkout: false};
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {...state , selectedItems: [...newSelectedItems] , ...sumItems(newSelectedItems)};
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {...state , ...sumItems(state.selectedItems)}
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {...state , ...sumItems(state.selectedItems)}
        case "CHECKOUT":
            return {...initilValues , selectedItems: [] , checkout: true};
        case "CLEAR":
            return {...initilValues , selectedItems: []  , checkout: false};
        default:
            return state;
    }
}

export const CartContext = React.createContext();

const CartContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(cartReducer , initilValues);
    return(
        <CartContext.Provider value={{state , dispatch}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;
