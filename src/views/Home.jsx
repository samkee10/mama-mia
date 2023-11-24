import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardPizza from '../components/CardPizza';
import { PizzaContext } from '../context/PizzaContext';

function Home() {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div>
      <header className="d-flex flex-column align-items-center text-white header">
        <h1 className="mb-3 pt-5 ">🍕 ¡Pizzería Mamma Mía!</h1>
        <h4 className="mb-3">¡Tenemos las mejores pizzas que podrás encontrar!</h4>
        <hr className='linea' />
      </header>
      <Container className="box-card">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
    </Container>
    </div>
  );
}

export default Home;