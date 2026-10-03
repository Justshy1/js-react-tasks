import React from 'react';

// BEGIN (write your solution here)
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const Body = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

const Title = ({ children }) => {
  return <h4 className="card-title">{children}</h4>;
};

const Text = ({ children }) => {
  return <p className="card-text">{children}</p>;
};

// Привязываем подкомпоненты к главному компоненту Card
Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

export default Card;
// END
