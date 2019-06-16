import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/App.css';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Card, Menu, Switch } from 'antd';
import image from '../images/background.png';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

var styles = {
  backgroundImage: 'url('+image+')'
};

class myHeader extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }


  render() {
    return (
        <div>
        {/* Menu Starts Here */}
        <div style={{ top: '0' }}>
          <center>
            <Menu
              onClick={this.handleClick}
              mode="horizontal"
              theme="light">
              <Menu.Item key="home" className="login-form-aligning-right">
                <NavLink to='/'><Icon type="home" theme='filled' />Home</NavLink>
              </Menu.Item>
              <Menu.Item key="litigation">              
                <NavLink to='/whyOnlineLitigation'><Icon type="book" theme='filled' />Why Online Litigation</NavLink>
              </Menu.Item>
              <SubMenu title={<span className="submenu-title-wrapper"><Icon type="plus-circle" theme='filled' /> Features</span>}>
              <MenuItemGroup>
                  <Menu.Item key="onlineBidding">Online Bidding</Menu.Item>
                  <Menu.Item key="onlineLitigation">Online Litigation</Menu.Item>
                  <Menu.Item key="onlineCaseFilling">Online Case Filling</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="aboutUs" ><NavLink to='/aboutUs'><Icon type="bulb" theme='filled' /> About Us</NavLink></Menu.Item>
              <Menu.Item key="contactUs"><NavLink to='/contactUs'><Icon type="phone" theme='filled' /> Contact Us</NavLink></Menu.Item>
              <Menu.Item key="register" style={{ float: 'right' }}><NavLink to='/register'>Register now!</NavLink></Menu.Item>
              <span style={{ float: 'right' }}>Or</span>
              <Menu.Item key="login" style={{ float: 'right' }}><NavLink to='/'>Login</NavLink></Menu.Item>
            </Menu>
          </center>
        </div>
        {/* Menu Ends here */}
        </div>
    )
  }
}


export default myHeader;
