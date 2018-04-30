import React from "react";
import sudoku from "sudoku-umd";
import Board from "../components/Board.js";
import style from './App.css';
import DifficultyButtons from "../components/DifficultyButtons.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialBoard: "",
			board: ""

		};
    	this.handleSolve = this.handleSolve.bind(this);
    	this.handleRestart = this.handleRestart.bind(this);
    	this.handleCheck = this.handleCheck.bind(this);
    	this.updateBoard = this.updateBoard.bind(this);		
    	this.setDifficultyEasy = this.setDifficultyEasy.bind(this);
    	this.setDifficultyMedium = this.setDifficultyMedium.bind(this);
    	this.setDifficultyHard = this.setDifficultyHard.bind(this);
	}

	setDifficultyEasy() {
		const easy = sudoku.generate("easy");
    	this.setState({
      		initialBoard: easy,
      		board: easy
    	});		
	}

	setDifficultyMedium() {
		const medium = sudoku.generate("medium");
    	this.setState({
      		initialBoard: medium,
      		board: medium
    	});	
	}

	setDifficultyHard() {
		const hard = sudoku.generate("hard");
    	this.setState({
      		initialBoard: hard,
      		board: hard
    	});	
	}

  	handleSolve(e) {
    	const solve = sudoku.solve(this.state.board);
    	if (solve === false) {
      		alert ('press restart to start again');
    	} else {
      		this.setState({
        	board: solve
      		});
    	}
  	}

  	handleRestart(e) {
    	const restart = this.state.initialBoard;
    	this.setState({
      		board: restart
    	});
  	}

  	handleCheck(e) {
    	const solve = sudoku.solve(this.state.board);
    	const myBoard = this.state.board;
    	if (myBoard  === solve) {
    		alert("good solution"); 
    	} else {
    		alert("wrong solution");
    	}

  	}

  	updateBoard(id, tile) {
    	const updatedBoard = this.state.board.split('');
    	const checkTile = (tile !== '') ? tile : '.'; 
    	updatedBoard.splice(id, 1, checkTile);
    	const newBoard = updatedBoard.join('');
    		this.setState({
     	 	board: newBoard
    	});
  	}

	render() {
		return (
			<div className={style.container}>
				<h1>Sudoku</h1>
				<DifficultyButtons
					setDifficultyEasy={this.setDifficultyEasy.bind(this)}
					setDifficultyMedium={this.setDifficultyMedium.bind(this)}
					setDifficultyHard={this.setDifficultyHard.bind(this)}
				/>
   				<div>
            		<button onClick={this.handleCheck}>Check</button>
            		<button onClick={this.handleSolve}>Solve</button>
            		<button onClick={this.handleRestart}>Restart</button>
			   </div>
        		<Board board={this.state.board}
               		initialBoard={this.state.initialBoard}
               		updateBoard={this.updateBoard}
               	/>
      		</div>		   
		);
	}
}

export default App;