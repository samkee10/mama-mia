import React, { useContext } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';

function CardPizza({ pizza }) {
  const { addToCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(pizza);
    navigate('/carrito');
  };

  return (
    <div className="card-container"> 
      <Card style={{ width: '10rem' }}>
        <Card.Img style={{ width: '8rem' }} variant="top" src={pizza.img} alt={pizza.name} />
        <Card.Body>
          <Card.Title >{pizza.name}</Card.Title>
          <hr />
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Ingredients: 🍕 {pizza.ingredients.join(', ')}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <hr />
        <Card.Footer>
              <h2 className='text-center'>$ {pizza.price.toLocaleString('es-CL')}</h2>
              <div className='d-flex justify-content-center gap-3'>
                <Button 
                  className='btn-primary'
                  onClick={() => navigate(`/Pizza/${pizza.id}`)}
                >
                  Ver Más 👀
                </Button>
                <Button className='btn-add'
                  variant='danger'
                  onClick={handleAddToCart}
                >
                  Añadir 🛒
                </Button>
              </div>
            </Card.Footer>
        
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPizza;