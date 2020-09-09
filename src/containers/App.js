import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component 
{
	constructor() 
	{
		super();
		this.state = 
		{
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount ()
	{
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) =>
	{
		this.setState({ searchfield: event.target.value });
	}
render()
{
		const { robots, searchfield } = this.state;
		const filteredrobots = robots.filter(robot =>
		{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
		<h1 className='tc'> Loading...</h1> :
		 (
		<header className='tc'>
			<h1 className='f2'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredrobots} />
				</ErrorBoundry>
			</Scroll>
		</header>
			);
	}
}
export default App;