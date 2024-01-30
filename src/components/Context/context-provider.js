import context from './context'

import { useReducer } from 'react'

const cartReducer = (state, action) => {
  if (action.type === 'Add_item') {
    let items = [...state.items];
    let itemExist = items.findIndex(item => item.id === action.item.id);

    if (itemExist !== -1) {
      const updatedItems = [...state.items];
      const updatedExistingItem = { ...updatedItems[itemExist] };

      updatedExistingItem.quantity += action.item.quantity;
      updatedItems[itemExist] = updatedExistingItem;

      const updatedAmount = state.totalAmount + action.item.quantity; // consider using just action.item.quantity

      return {
        items: updatedItems,
        totalAmount: updatedAmount
      };
    }

    const newItem = [...state.items, action.item];
    const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.quantity);

    return {
      items: newItem,
      totalAmount: updatedTotalAmount
    };
  }

  return state; // Move this line outside of the if block
};



const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, { items: [], totalAmount: 0 });

  const addItemHandler = (item) => {
    dispatchCartState({ type: 'Add_item', item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
  };

  return (
    <context.Provider value={cartContext}>
      {props.children}
    </context.Provider>
  );
};

export default CartProvider;