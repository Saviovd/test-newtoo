import React from 'react';
import './styles.css';

const Button = ({ content, icon, action, fill = true, size = 1 }) => {
  return (
    <button className={fill ? "button" : "unfilled"} onClick={action} style={{padding: `${size === 1 ? '10px' : '5px 10px'}`}}>
      {icon && icon}
      <span className="button-content">{content}</span>
    </button>
  );
};

export default Button;