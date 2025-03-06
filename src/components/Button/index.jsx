import React from 'react';
import './styles.css';

const Button = ({ content, icon, action, fill = true }) => {
  return (
    <button className={fill ? "button" : "unfilled"} onClick={action}>
      {icon && icon}
      <span className="button-content">{content}</span>
    </button>
  );
};

export default Button;