import React from 'react';

class Tile extends React.Component {
  	handleChange(e) {
    	this.props.updateBoard(e.target.dataset.id, e.target.value);
  	}

  	render() {
    	return (
      		<input 
        		type="number" 
        		min="1" 
        		max="9" 
        		data-id={this.props.id}
        		value={!isNaN(this.props.tile) ? this.props.tile : ''} 
        		onChange={this.handleChange.bind(this)}
      		/>
    	);
  	}
}

export default Tile;