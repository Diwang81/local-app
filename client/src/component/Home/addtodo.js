import React, { Component } from 'react';
import { Input, Button } from 'antd';

export class AddTodo extends Component {
	state = {
		title: '',
		visible: false,
		isOpen: false,
		showModal: false,
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '', visible: false });
	};

	handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

	onChange = (e) => this.setState({ title: e.target.value });

	render() {
		return (
			<div onSubmit={this.onSubmit}>
				<Input
					name="title"
					style={{ width: '100%', marginBottom: '20px' }}
					placeholder="Add Developer"
					value={this.state.title}
					onChange={this.onChange}
				/>
				<Button
					type="primary"
					htmlType="submit"
					onSubmit={this.onSubmit}
					style={{ float: 'right' }}
				>
					Submit
				</Button>
				<Button
					type="danger"
					onClick={this.handleCancel}
					style={{ float: 'right', marginRight: '10px' }}
				>
					Close
				</Button>
			</div>
		)
	}
}

export default AddTodo;
