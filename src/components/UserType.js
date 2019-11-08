import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class UserType extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}
	back = e => {
		e.preventDefault();
		this.props.prevStep();
	}
	render() {
		const { values } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Select User Type" />

					<RaisedButton
						label="Student"
						primary={true}
						style={styles.button}
						onClick={this.continue} />
					<RaisedButton
						label="Professor"
						primary={false}
						style={styles.button}
						onClick={this.back} />

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
export default UserType
