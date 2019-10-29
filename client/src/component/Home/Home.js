import React from 'react';
import { Icon, Button, PageHeader, Input, Modal, Form } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import Todos from '../../Todos';
import AddTodo from '../../addtodo';

const { Search } = Input;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      expandIconPosition: 'left',
      visible: false
    };
  }
    
  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/Diwang81/API-test/developer/')
      .then(res => this.setState({ todos: res.data }));
  }

  delTodo = (id) => {
    axios.delete('https://my-json-server.typicode.com/Diwang81/API-test/developer/',{params: {id}})
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  addTodo = (title) => {
    axios.post('https://my-json-server.typicode.com/Diwang81/API-test/developer/', {
      title: title,
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }));
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

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    }

  onChange = (e) => this.setState({ title: e.target.value, visible: false });

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="Header">
          <div className="PageHeader">
            <PageHeader title="Games"/>
            <Search placeholder="Search App or Developer" onSearch={value => console.log(value)} style={{ width: '30%'}} enterButton />
            <Button onClick={this.showModal2} type='link' style={{ marginLeft: '10%'}} >< h4><Icon type="plus-circle" theme="twoTone" /> App</h4></Button>
            <Button onClick={this.showModal} type='link' style={{ marginLeft: '5%'}} >< h4><Icon type="plus-circle" theme="twoTone" /> Developer</h4></Button>            
            <Button type='link' style={{ marginLeft: '5%'}} >< h4><Link to="/Member"/><Icon type="plus-circle" theme="twoTone" /> Member </h4></Button>
            <Modal
                title="Add Developer"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[null]}
              >
                <Form layout="vertical">
                  <Form.Item label="Title">
                    {(<AddTodo addTodo={this.addTodo} />)}
                  </Form.Item>
                </Form>
              </Modal>
          </div>
        </div>
        <div style={{ width: '75%', margin: '20px auto auto'}}>
            <Todos todos={this.state.todos} delTodo={this.delTodo}/>
        </div>
      
      </React.Fragment>
    );
  }
}

export default Home;