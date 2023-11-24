import React, { useContext } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { PizzaContext } from '../context/PizzaContext';

function Carrito() {
  const { pizzasInCart, increaseQuantity, decreaseQuantity } = useContext(PizzaContext);

  const handleIncreaseQuantity = (pizzaId) => {
    increaseQuantity(pizzaId);
  };

  const handleDecreaseQuantity = (pizzaId) => {
    decreaseQuantity(pizzaId);
  };

  const total = pizzasInCart.reduce((acc, pizza) => acc + (pizza.price || 0) * (pizza.quantity || 0), 0);

  return (
    <div>
      <h2 className='mb-4'>Detalles del pedido</h2>
      {pizzasInCart.length === 0 ? (
        <p>No hay pizzas en el carrito</p>
      ) : (
        <ListGroup>
          {pizzasInCart.map((pizza) => (
            <ListGroup.Item key={pizza.id} className='carrito-box'>
              <div>
                <Card.Img src={pizza.img} alt={pizza.name} style={{ width: '80px', marginRight: '100px' }} />
                <span>{pizza.name}</span>
              </div>
              <div className="d-flex align-items-center">
                <Button style={{backgroundColor:'blue', width:'20px'}} variant='outline-success' onClick={() => handleIncreaseQuantity(pizza.id)}>
                  +
                </Button>
                <span className="mx-2">Cantidad: {pizza.quantity}</span>
                <Button style={{backgroundColor:'red', width:'20px'}} onClick={() => handleDecreaseQuantity(pizza.id)}>
                  -
                </Button>
              </div>
              <span>$ {pizza.price}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <div className='mt-4'>
        <h4>Total: ${total}</h4>
        <Button style={{backgroundColor:'green'}}>Ir a pagar</Button>
      </div>
    </div>
  );
}

export default Carrito;