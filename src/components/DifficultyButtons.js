import React from "react";
import style from './DifficultyButtons.css';

const DifficultyButtons = props => (
	<div className={style.buttons}>
		<button onClick={props.setDifficultyEasy}>START EASY BOARD</button>
		<button onClick={props.setDifficultyMedium}>START MEDIUM Board</button>
		<button onClick={props.setDifficultyHard}>START HARD BOARD</button>
	</div>
);

export default DifficultyButtons;