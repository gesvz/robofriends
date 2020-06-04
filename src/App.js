import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchField: ''
		}
	}

	onsearchChange = (ev) => {
		this.setState({ searchField: ev.target.value });
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		console.log(filteredRobots);

		return (
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onsearchChange}/>
				{/*<CardList robots={this.state.robots}/>*/}
				<CardList robots={filteredRobots}/>
			</div>
		);		
	}
}


/*const App = () => {
	return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox />
			<CardList robots={robots}/>
		</div>
	);
}
*/
export default App;