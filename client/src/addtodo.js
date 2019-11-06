import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

export class AddTodo extends Component {
	state = {
		title: '',
		visible: false,
		isOpen: false
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '', visible: false });
	}

	handleCancel = e => {
		e.preventDefault();
		this.setState({
			visible: false,
		});
	};

	onChange = (e) => this.setState({ title: e.target.value });

	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Item>
					<Input
						type="text"
						name="title"
						style={{ width: '100%' }}
						placeholder="Add Developer"
						visible={false}
						value={this.state.title}
						onChange={this.onChange}
					/>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						onOk={this.onChange}
						style={{ float: 'right' }}
						visible={this.state.visible}>
						Submit
                    </Button>
				</Form.Item>
			</Form>
		)
	}
}

export default AddTodo;
