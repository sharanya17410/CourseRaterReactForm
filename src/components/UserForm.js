import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import FormSchoolDetails from './FormSchoolDetails'
import UserType from './UserType'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		yearofjoining: '',
		city: '',
		bio: '',
		school: '',
		degree: '',
		major: ''
	}
	//Proceed to the next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	}
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	}
	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	}
	render() {
		const { step } = this.state;
		const { firstName, lastName, email, school, degree, major, city, bio } = this.state;
		const values = { firstName, lastName, email, city, school, degree, major, bio };

		switch (step) {
			case 1:
				return (
					<UserType
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values} />
				)
			case 2:
				return (
					<FormUserDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values} />
				)
			case 4:
				return (
					<FormPersonalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values} />
				)
			case 3:
				return (
					<FormSchoolDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values} />
				)
			case 5:
				return (
					<Confirm
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values={values} />
				)
			case 6:
				return <Success values={values} />
		}
	}
}

export default UserForm
