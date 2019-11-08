import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
export class Success extends Component {

	componentDidMount = () => {

		fetch('http://localhost:8080/people', {
			method: 'POST',
			body: JSON.stringify(this.props.values),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => console.log(res.json()))
			.then((data) => {
				//this.setState({ contacts: data })
				console.log(data);
			})
			.catch(console.log)
	}
	continue = e => {
		e.preventDefault();
		//backend processing of the form
		this.props.nextStep();
	}
	back = e => {
		e.preventDefault();
		this.props.prevStep();
	}
	render() {
		//const { values } = this.props;
		return (

			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Confirm User Data" />
					<h1>Thanks for filling out the form</h1>

				</React.Fragment>
			</MuiThemeProvider>
		)
	}
}
const styles = {
	button: {
		margin: 15
	}
}
export default Success
