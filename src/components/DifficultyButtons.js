import React from "react";


const DifficultyButtons = props => (
	<div>
		<button onClick={props.setDifficultyEasy}>START EASY BOARD</button>
		<button onClick={props.setDifficultyMedium}>START MEDIUM Board</button>
		<button onClick={props.setDifficultyHard}>START HARD BOARD</button>
	</div>
);

export default DifficultyButtons;