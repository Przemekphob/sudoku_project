import React from 'react';

const Tile = (props) => {
	return (
		<input 
			onSubmit={(e) => this.handleSubmit(e)}
			type="number" 
			value={this.state.value} 
			onChange={(e) => props} 
			min = "1"
			max = "9"
		/>
	)
}

export default Tile;