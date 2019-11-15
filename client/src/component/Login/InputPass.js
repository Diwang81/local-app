import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import { login } from '../UserFunctions';

export class InputPass extends Component {
	constructor() {
        super();
        this.state = {
          password: '',
        };
    
    this.onSubmit = this.onSubmit.bind(this);
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
						prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="password"
						className="form-control"
						name="password"
						placeholder="Password"
						initialValue={this.state.password}
						onChange={this.onChange}
					/>
				</div>

			</div>
		)
	}
}

export default InputPass;
