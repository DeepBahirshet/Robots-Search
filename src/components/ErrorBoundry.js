import React, { Component } from 'react';

class ErrorBoundry extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = { hasError: false }
	}

	componenetDidCatch(error, info) 
	{
		this.setState({hasError: true});
	}

	render()
	{
		if (this.state.hasError)
		{
			return <h1>Sorry ! something went wrong. Try again</h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundry;