import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
export class Confirm extends Component {
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
		const { values } = this.props;
		return (

			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Confirm User Data" />
					<List>
						<ListItem primaryText="First Name"
							secondaryText={values.firstName} />
						<ListItem primaryText="Last Name"
							secondaryText={values.lastName} />
						<ListItem primaryText="Email"
							secondaryText={values.email} />
						<ListItem primaryText="School"
							secondaryText={values.school} />
						<ListItem primaryText="Degree"
							secondaryText={values.degree} />
						<ListItem primaryText="Major"
							secondaryText={values.degree} />
						<ListItem primaryText="City"
							secondaryText={values.city} />
						<ListItem primaryText="Bio"
							secondaryText={values.bio} />
					</List>
					<br />
					<RaisedButton
						label="Confirm & Continue"
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
export default Confirm
