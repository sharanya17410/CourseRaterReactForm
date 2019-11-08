import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class FormUserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}
	render() {
		const { values } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter User Details" />
					<TextField
						hintText="Enter your first name"
						floatingLabelText="FirstName"
						onChange={this.props.handleChange('firstName')}
						defaultValue={values.firstName}
					/>
					<br />
					<TextField
						hintText="Enter your Last name"
						floatingLabelText="LastName"
						onChange={this.props.handleChange('lastName')}
						defaultValue={values.lastName}
					/>
					<br />
					<TextField
						hintText="Enter your email"
						floatingLabelText="Email"
						onChange={this.props.handleChange('email')}
						defaultValue={values.email}
					/>
					<br />
					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue} />
					<br />

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
export default FormUserDetails
