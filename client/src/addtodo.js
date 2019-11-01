import React, { Component } from 'react';
import { Form, Input } from 'antd';

export class AddTodo extends Component {
    state = {
        title: '',
        visible: false,
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
            <Form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <Input 
                    type="text" 
                    name="title"
                    style={{ padding: '5px'}}
                    placeholder="Add Developer" 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <Input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style= {{flex: '1',}}
                    visible={this.state.visible}
                />
            </Form>
        )
    }
}

export default AddTodo;