import React from "react";
import "./styles.css";

const ThinButton = ({ content, icon, action, size = 1 }) => {
	return (
		<button className="thin-button" onClick={action} style={{padding: `${size === 1 ? '10px' : '5px 10px'}`}}>
			{icon}
			{content && <span className="button-content">{content}</span>}
		</button>
	);
};

export default ThinButton;
