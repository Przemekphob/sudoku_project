import React from "react";
import sudoku from "sudoku-umd";
import Board from "../components/Board.js";
import DifficultyButtons from "../components/DifficultyButtons.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialBoard: "",
			board: "",
			solved: []

		};
	}

	setDifficultyEasy() {
		this.setState({ initialBoard: sudoku.generate("easy") });
	}

	setDifficultyMedium() {
		this.setState({ initialBoard: sudoku.generate("medium") });
	}

	setDifficultyHard() {
		this.setState({ initialBoard: sudoku.generate("hard") });
	}

	handleChange(e) {
		this.setState({ board: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	reset() {
		this.setState({ initialBoard: "" });
	}

	solve() {
	    this.setState({solved: sudoku.solve(this.state.Board).split('')});
	}

	check(board) {
		const checked = board.join();
		if (this.state.solved === checked) {
			alert('Winner');
		} else {
			alert('Looser');
		}
	}

	render() {
		return (
			<div>
				<h1>Sudoku</h1>
				<DifficultyButtons
					setDifficultyEasy={this.setDifficultyEasy.bind(this)}
					setDifficultyMedium={this.setDifficultyMedium.bind(this)}
					setDifficultyHard={this.setDifficultyHard.bind(this)}
				/>
   				<div>
          			<button onClick={() => this.check()}>Check</button>
          			<button onClick={() => this.reset()}>Restart</button>
          			<button onClick={() => this.solve()}>Solve</button>
			   </div>
				<Board
					onSubmit={this.handleSubmit.bind(this)}
					startBoard={this.state.initialBoard}
					onChange={this.handleChange.bind(this)}
				/>			   
			</div>
		);
	}
}

export default App;