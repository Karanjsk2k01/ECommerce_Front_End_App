export const storeCartItemInBackend = async (userEmail, cartItem) => {

  const apiUrl = `https://crudcrud.com/api/286e912cb78b43a59491ea44fe915e0b/${userEmail}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    });

    if (response.ok) {
      console.log('Cart item stored in backend successfully.');
    } else {
      console.error('Failed to store cart item in backend.');
    }
  } catch (error) {
    console.error('Error storing cart item in backend:', error);
  }
};

export const getCartItemsFromBackend = async (userEmail) => {

  const apiUrl = `https://crudcrud.com/api/286e912cb78b43a59491ea44fe915e0b/${userEmail}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
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