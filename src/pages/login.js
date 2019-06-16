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

class Login extends Component {

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
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <div style = {styles}>
          <Row type="flex" position="fixed" justify="center" align="middle" style={{ height: '600px', width: '90%', justifyContent: 'right' }}>
            <Col>
              <Card title="LOGIN" bordered={true} hoverable={true}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <FormItem>
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: false,
                    })(
                      <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                </Button>
                    Or <NavLink to='/register'>Register now!</NavLink>
                  </FormItem>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;
