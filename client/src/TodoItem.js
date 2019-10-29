import React, { Component } from 'react';
import { Button, List, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const data = ['Demo Game'];

export class TodoItem extends Component {
    render() {
        const { id, title } = this.props.todo;
        return (
            <List
                style={{backgroundColor: 'white'}}
                header={
                    <div>
                        <Button type="link" style={{fontWeight: 'bold', color: 'black' }}><h2>{title}</h2></Button>
                        <Button onClick={this.props.delTodo.bind(this, id)} style={{ float: 'right', fontWeight: 'bold'}}>
                            Archive
                        </Button>
                    </div>}
                bordered
                dataSource={data}
                renderItem={item => 
                <List.Item style={{ padding: '12px 0px' }}>
                    <div style={{ display: 'inline-block', width: '42px', height: '50px', margin: '0px 4px' }}>
                        <div style={{ width: '28.8px', padding: '4px', margin: '10.6px auto' }}>
                        <Button type='link' style={{ border: 0, color: 'black', padding: 0, width: '18px', height: '18px', fontWeight: 'bold' }}>
                            <Icon type="pushpin" style={{ fontSize: '18px' }} />
                        </Button>
                        </div>
                    </div >
                    <div style={{ width: '470px', height: '50px' }}>
                        <div style={{ display: 'inline-block' }}>
                        <Avatar shape="square" size={50} icon="user" />
                        </div>
                        <div style={{ padding: '0px 0px 0px 12px', display: 'inline-block' }}>
                        <Button type="link" ><Link to="/game/1782/dashboard"><b>{item}</b></Link></Button>
                        </div>
                    </div>
                    <a 
                        href='/game/1782/dashboard' 
                        style={{ width: '161px', height: '50px', borderLeft: '1px solid #f3f2f2', textAlign: 'center' }}>
                        <b>DAU</b>
                    </a>
                    <a 
                        href='/game/1782/dashboard' 
                        style={{ width: '161px', height: '50px', borderLeft: '1px solid #f3f2f2', textAlign: 'center' }}>
                        <b>New users</b>
                    </a>
                    <a 
                        href='/game/1782/dashboard' 
                        style={{ width: '161px', height: '50px', borderLeft: '1px solid #f3f2f2', textAlign: 'center' }}>
                        <b>ARPDAU</b>
                    </a>
                    <Button style={{ fontWeight: 'bold'}}>
                        Add App
                    </Button>
                </List.Item>}
                />
                
            
        )
    }
}


export default TodoItem;