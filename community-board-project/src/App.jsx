import { useState } from "react";
import placeholderImg from "/placeholder.jpg";
import "./App.css";
import ResourceCard from "./components/ResourceCard";

class Resource {
	constructor(title, link, image) {
		this.title = title;
		this.link = link;
		this.image = image;
	}
}

const resources = [
	new Resource(
		"Unity: 2D Sprite Tutorial",
		"https://www.google.com",
		placeholderImg
	),
	new Resource(
		"Collision Detection Tutorial for Unity",
		"https://www.google.com",
		placeholderImg
	),
	new Resource(
		"Unity Raycasting Tutorial",
		"https://www.google.com",
		placeholderImg
	),
	new Resource(
		"Unity 6 Scripting API",
		"https://docs.unity3d.com/6000.0/Documentation/ScriptReference/index.html",
		"/scripting-api.png"
	),
	new Resource(
		"Unity C# Data Persistence Methods",
		"https://www.google.com",
		placeholderImg
	),
	new Resource(
		"Unity Event Handling Tutorial",
		"https://www.google.com",
		placeholderImg
	),
	new Resource(
		"Understanding the Singleton Pattern in Unity",
		"https://www.google.com",
		placeholderImg
	),
	new Resource(
		"Practical Application of Coroutines in Unity",
		"https://www.google.com",
		placeholderImg
	),
	new Resource(
		"The Importance of the Game Loop",
		"https://www.google.com",
		placeholderImg
	),
	new Resource(
		"Understanding Unity's GameObject Hierarchy",
		"https://www.google.com",
		placeholderImg
	),
];

const App = () => {
	return (
		<>
			<h1>Unity 2D Game Development Resources</h1>

			<div className="resource-container">
				{resources.map((r) => {
					return <ResourceCard key={r.title} data={r} />;
				})}
			</div>
		</>
	);
};

export default App;
