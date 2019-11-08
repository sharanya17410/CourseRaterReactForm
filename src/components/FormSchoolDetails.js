import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class FormSchoolDetails extends Component {
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
					<AppBar title="Enter School Details" />
					<TextField
						hintText="Enter your school name"
						floatingLabelText="School"
						onChange={this.props.handleChange('school')}
						defaultValue={values.school}
					/>
					<br />
					<TextField
						hintText="Enter your Degree"
						floatingLabelText="Degree"
						onChange={this.props.handleChange('degree')}
						defaultValue={values.degree}
					/>
					<br />
					<TextField
						hintText="Enter your major"
						floatingLabelText="major"
						onChange={this.props.handleChange('major')}
						defaultValue={values.major}
					/>
					<br />
					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue} />
					<br />
					<RaisedButton
						label="Back"
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
export default FormSchoolDetails
