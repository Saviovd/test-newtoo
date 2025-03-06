import React from "react";
import "./styles.css";

const ThinButton = ({ content, icon, action }) => {
	return (
		<button className="thin-button" onClick={action}>
			{icon}
			{content && <span className="button-content">{content}</span>}
		</button>
	);
};

export default ThinButton;
