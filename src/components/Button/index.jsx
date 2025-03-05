import React from 'react';
import './styles.css';

const Button = ({ content, icon, action }) => {
  return (
    <button className="button" onClick={action}>
      {icon && icon}
      <span className="button-content">{content}</span>
    </button>
  );
};

export default Button;