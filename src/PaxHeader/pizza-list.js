import React from 'react';

const PizzaList = (props) => {
  const pizzaItems = props.pizza.map((pizza,i) => {
    return(<li
      className="pizza-list-item"
      key={i}>
      {pizza}
      </li>);
  });
    return(
      <ul className="pizza-list-group">
      {pizzaItems}
      </ul>
    );
}

export default PizzaList;
