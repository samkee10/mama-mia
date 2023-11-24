import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { PizzaContext } from '../context/PizzaContext';

const Menu = () => {
  const { pizzasInCart } = useContext(PizzaContext);
  
  // Calcular el valor total del carrito
  const total = pizzasInCart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,
    0
  );

  return (
    <Navbar bg="light">
      <Navbar.Brand style={{ color: 'white' }} as={NavLink} to="/">
        🍕 ¡Pizzería Mamma Mía!
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-menu">
          
          <Nav.Link as={NavLink} to="/carrito" exact activeClassName="active">
            🛒 (${total.toFixed(0)}) 
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;