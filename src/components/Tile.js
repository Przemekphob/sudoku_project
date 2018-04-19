import React from "react";

const Tile = props => 
	<input 
		onChange={props.onChange} 
		value={props.value} 
		type="number" 
		min="1" 
		max="9" 
		step="1"
	/>;

export default Tile;