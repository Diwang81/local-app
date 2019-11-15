import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import { login } from '../UserFunctions';

export class InputEmail extends Component {
	state = {
		email: '',
	}

	onSubmit(e) {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
		const user = {
			email: this.state.email,
			password: this.state.password
		}
		login(user).then(res => {
      if (res) {
        this.props.history.push('/')
      }
    })
	};

	render() {
		return (
			<div onSubmit={this.onSubmit}>
				<div>
					<Input
						prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="email"
						className="form-control"
						name="email"
						placeholder="Enter email"
						initialValue={this.state.email}
						onChange={this.onChange}
					/>
				</div>
			</div>
		)
	}
}

export default InputEmail;
