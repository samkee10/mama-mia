import { createContext, useEffect, useState } from 'react';

const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzasInCart, setPizzasInCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/pizzas.json');
      const pizzasData = await response.json();
      setPizzas(pizzasData);
    } catch (error) {
      console.error('Error fetching pizzas:', error);
    }
  };

  const addToCart = (pizza) => {
    setPizzasInCart((prevCart) => {
      const existingPizza = prevCart.find((p) => p.id === pizza.id);

      if (existingPizza) {
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (pizzaId) => {
    setPizzasInCart((prevCart) => prevCart.filter((pizza) => pizza.id !== pizzaId));
  };

  const clearCart = () => {
    setPizzasInCart([]);
  };

  const increaseQuantity = (pizzaId) => {
    setPizzasInCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === pizzaId ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  const decreaseQuantity = (pizzaId) => {
    setPizzasInCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === pizzaId && pizza.quantity > 1
          ? { ...pizza, quantity: pizza.quantity - 1 }
          : pizza
      )
    );
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        pizzasInCart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export { PizzaContext, PizzaProvider };