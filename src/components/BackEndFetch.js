export const storeCartItemInBackend = async (userEmail, cartItem) => {
  try {
    const response = await fetch(`https://react-api-demo-f9b0e-default-rtdb.firebaseio.com/cart/${encodeURIComponent(userEmail)}.json`);

    if (response.ok) {
      const currentCartData = await response.json() || [];

      currentCartData.push(cartItem)

      // Store the updated cart data back in the backend
      const updateResponse = await fetch(`https://react-api-demo-f9b0e-default-rtdb.firebaseio.com/cart/${encodeURIComponent(userEmail)}.json`, {
        method: 'PUT',
        body: JSON.stringify(currentCartData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (updateResponse.ok) {
        console.log('Cart item stored in backend successfully.');
      } else {
        console.error('Failed to store cart item in backend.');
      }

    } else {
      console.error('Failed to fetch current cart data from backend.');
    }
  } catch (error) {
    console.error('Error storing cart item in backend:', error);
  }
};


export const getCartItemsFromBackend = async (userEmail) => {

  const apiUrl = `https://react-api-demo-f9b0e-default-rtdb.firebaseio.com/cart/${encodeURIComponent(userEmail)}.json`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });


    if (response.ok) {
      const cartItems = await response.json();
      console.log('Cart items retrieved from backend:', cartItems);

      return cartItems;

    } else {
      console.error('Failed to retrieve cart items from backend.');
    }
  } catch (error) {
    console.error('Error retrieving cart items from backend:', error);
  }
};