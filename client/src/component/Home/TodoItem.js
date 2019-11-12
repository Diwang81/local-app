import React, { Component } from 'react';
import { Button, List, Icon, Avatar, Statistic, Form, Modal, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import AddTodo from './addtodo';
import axios from 'axios';

const data = [''];

export class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Todos: [],
			visible: false,
		};
	}

	componentDidMount() {
		axios.get('https://my-json-server.typicode.com/Diwang81/API-test/application/')
			.then(res => this.setState({ todos: res.data }));
	}

	editTodo = (id, title) => {
		axios.put(`https://my-json-server.typicode.com/Diwang81/API-test/application/${id}`,
			{
				title
			},
		)
			.then(({ data }) => {
				this.setState(prevSate => {
					const { todos } = prevSate;
					const oldTodoIndex = todos.findIndex(todo => todo.id === data.id)
					const newTodo = { ...todos[oldTodoIndex], ...data }
					todos.splice(oldTodoIndex, 1, newTodo)

					return { todos: todos }
				})

			})
			.catch(error => console.log(error))
	}

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<List
				style={{ backgroundColor: 'white', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)' }}
				header={
					<Row>
						<Col>
							<Button type="link" style={{ fontWeight: 'bold', color: 'black' }}><h2>{title}</h2></Button>
							<Button onClick={this.props.delTodo.bind(this, id)} style={{ float: 'right', fontWeight: 'bold' }}>
								Archive
							</Button>
						</Col>
					</Row>}
				bordered
				dataSource={data}
				renderItem={item =>
					<Row>
						<Col>
							<List.Item style={{ padding: '12px 0px', height: '90px' }}>
								<Col style={{ display: 'inline-block', width: '42px', height: '50px', margin: '0px 4px' }}>
									<Col style={{ width: '28.8px', padding: '4px', margin: '10.6px auto' }}>
										<Button type='link' style={{ border: 0, color: 'black', padding: 0, width: '18px', height: '18px', fontWeight: 'bold' }}>
											<Icon type="pushpin" style={{ fontSize: '18px' }} />
										</Button>
									</Col>
								</Col >
								<Col style={{ width: '470px' }}>
									<Col style={{ display: 'inline-block' }}>
										<Avatar shape="square" size={50} icon="user" />
									</Col>
									<Col style={{ padding: '0px 0px 0px 12px', display: 'inline-block' }}>
										<Button type="link" style={{ color: 'black' }} ><Link to="/game/1782/dashboard"><b>{title}</b></Link></Button>
									</Col>
								</Col>
								<Col>
									<Statistic
										style={{ width: '161px', height: '50px', borderLeft: '1px solid #f3f2f2', textAlign: 'center' }}
										title="DAU"
										value={11.28}
										precision={2}
										valueStyle={{ color: '#3f8600' }}
										prefix={<Icon type="arrow-up" />}
										suffix="%"
									/>
								</Col>
								<Col>
									<Statistic
										style={{ width: '161px', height: '50px', borderLeft: '1px solid #f3f2f2', textAlign: 'center' }}
										title="New Users"
										value={8.14}
										precision={2}
										valueStyle={{ color: '#3f8600' }}
										prefix={<Icon type="arrow-up" />}
										suffix="%"
									/>
								</Col>
								<Col>
									<Statistic
										style={{ width: '161px', height: '50px', borderLeft: '1px solid #f3f2f2', textAlign: 'center' }}
										title="ARPDAU"
										value={9.3}
										precision={2}
										valueStyle={{ color: '#cf1322' }}
										prefix={<Icon type="arrow-down" />}
										suffix="%"
									/>
								</Col>
								<Col>
									<Button onClick={this.showModal} style={{ fontWeight: 'bold' }}>
										<Icon type="plus-circle" theme="filled" />
											Add App
                  </Button>
								</Col>
								<Modal
									title="Add Application"
									visible={this.state.visible}
									onCancel={this.handleCancel}
									footer={null}
								>
									<Form layout="vertical">
										<Form.Item label="Title">
											{(<AddTodo addTodo={this.addTodo} />)}
										</Form.Item>
									</Form>
								</Modal>
							</List.Item>
						</Col>
					</Row>}
			/>
		)
	}
}


export default TodoItem;