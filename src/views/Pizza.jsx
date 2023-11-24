import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Figure, ListGroup, Button } from 'react-bootstrap';
import { PizzaContext } from '../context/PizzaContext';

function Pizza() {
  const { pizzas, addToCart } = useContext(PizzaContext);
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
   
    const selectedPizza = pizzas.find((p) => p.id === id);
    setPizza(selectedPizza);
  }, [id, pizzas]);


  const handleAddToCart = () => {
    addToCart(pizza);

  };

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div className="pizza-details">
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt={pizza.name}
          src={pizza.img}
        />
        <Figure.Caption>
          <h2>{pizza.name}</h2>
          <ListGroup>
            <ListGroup.Item>Ingredients: 🍕 {pizza.ingredients.join(', ')}</ListGroup.Item>
            <p className='text-align-center'>{pizza.desc}</p>
          </ListGroup>
          <h3 className="text-center">$ {pizza.price.toLocaleString('es-CL')}</h3>
          <Button variant="danger" onClick={handleAddToCart}>
          Añadir 🛒
          </Button>
          <Link to="/menu">Volver al menú</Link>
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default Pizza;