import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child(props) {
	return (
		<div
			className="child"
			onClick={() => props.onChangeColor(getRandomColor)}
			style={{ backgroundColor: props.childColor }}
		/>
	);
}

export default Child;
