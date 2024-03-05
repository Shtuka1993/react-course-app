import React from 'react';

import { Button } from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';

import { Link } from 'react-router-dom';

import * as text from 'src/constants';

interface LoginState {
	email: string;
	password: string;
}

class Login extends React.Component<object, LoginState> {
	constructor(props: object) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	submit() {
		console.log(this);
		alert('Do stuff!!!...');
	}

	render() {
		return (
			<div>
				<div>
					<h2>{text.LOGIN}</h2>
					<form>
						<Input
							placeholder={text.EMAIL}
							name={text.EMAIL}
							onChange={({ target }) => {
								const newState = { ...this.state };
								newState.email = target.value;
								this.setState(newState);
							}}
							value={this.state.email}
						/>
						<Input
							placeholder={text.PASSWORD}
							name={text.PASSWORD}
							onChange={({ target }) => {
								const newState = { ...this.state };
								newState.password = target.value;
								this.setState(newState);
							}}
							value={this.state.password}
						/>
						<Button text={text.LOGIN} onClick={this.submit} />
						<p>
							{text.LOGIN_REGISTRATION_HINT}
							<Link to='/registration'>{text.REGISTRATION}</Link>
						</p>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
