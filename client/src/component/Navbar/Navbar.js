import React, { Component } from 'react';
import { Button, Menu, Icon, Avatar} from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: true,
      expandIconPosition: 'left',
    };
    this.logOut = this.logOut.bind(this);
  };

  logOut(_e) {
    localStorage.removeItem('usrtoken')
    this.props.history.push('/login')
  }

  render() {
    return (
        <div>
          <Menu className="Menu" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item>
              <Avatar src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-joystick-game-graphic-design-element-vector-illustration-png-image_3698982.jpg" style={{ margin :'10px', marginLeft: "30px", marginRight:'150px' }} />
            </Menu.Item>
            <Menu.Item>
              <Button type="link" style={{ color: 'white' }}><Link to="/">< h3 style={{ color: 'white' }}>Overview</h3></Link></Button>
            </Menu.Item>
              <SubMenu
                style={{ position: 'absolute', right: 0 }}
                title={
                  <span className="submenu-title-wrapper">
                    <Icon type="user" />
                  </span>
                }
              >
                <Menu.ItemGroup>
                  <Menu.Item key="setting:1"><Icon type="profile" />Account<Link to="/ManageAccount" /></Menu.Item>
                  <Menu.Item key="setting:2"><Icon type="exclamation-circle" theme="filled" />Developers <Link to="/ManageDev" /></Menu.Item>
                  <Menu.Item key="setting:3"><Icon type="file-done" />Applications<Link to="/ManageApp" /></Menu.Item>
                  <Menu.Item key="setting:4"><Icon type="setting" />Members<Link to="/Member" /></Menu.Item>
                  <Menu.Item key="setting:5" onClick={this.logOut}><Icon type="logout" />Logout</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
          </Menu>
        </div>
    );
  }
};

export default Navbar;