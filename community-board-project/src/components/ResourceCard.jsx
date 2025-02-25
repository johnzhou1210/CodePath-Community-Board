import React from "react";
import "../App.css";

const ResourceCard = (props) => {
	return (
		<div className="resource-card">
			<h2>{props.data.title}</h2>
			<img
				className="resource-card-image"
				src={props.data.image}
				alt={props.data.title}
			/>
			<a className="resource-card-link" href={props.data.link}>
				Open resource
			</a>
		</div>
	);
};

export default ResourceCard;
