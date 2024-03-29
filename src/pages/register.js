import React, { Component } from 'react';
import '../stylesheet/App.css';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Card, notification} from 'antd';
import image from '../images/backgroundregister.png';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

var styles = {
  backgroundImage: 'url('+image+')'
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    }
  }

  openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: 'Authentication',
      description: msg,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { prefix, phoneNo } = values;

        fetch('http://localhost:4000/api/v1/users', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ ...values, phoneNo: `${prefix}${phoneNo}` })
        })
        .then(response => response.json())
        .then(res => {
          const { status, msg, data } = res;
          if(status) {
            this.openNotificationWithIcon('success', msg);
          } else {
            this.openNotificationWithIcon('error', msg);
          }
          console.log('user created', data);
        }).catch((err) => {
          alert(err.message)
        })
      }
    });
  }

  componentDidCatch(error) {
    console.log(error, 'error >>>')
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '92',
    })(
      <Select style={{ width: 70 }}>
        <Option value="92">+92</Option>
        <Option value="0092">0092</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div style={styles}>
      <Row type="flex" justify="center" align="middle" style={{ height: '600px' }}>
        <Col span={12}>
          <Card title="REGISTER" bordered={true} hoverable={true}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem
                {...formItemLayout}
                label="E-mail"
              >
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }, {
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Password"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input type="password" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Confirm Password"
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: 'Please confirm your password!',
                  }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input type="password" onBlur={this.handleConfirmBlur} />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label={(
                  <span>
                    Nickname&nbsp;
                    <Tooltip title="What would you like for others to call you ?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                )}
              >
                {getFieldDecorator('nickname', {
                  rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Phone Number"
              >
                {getFieldDecorator('phoneNo', {
                  rules: [{ required: true, message: 'Please input your phone number!' }],
                })(
                  <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="CNIC"
              >
                {getFieldDecorator('CNIC', {
                  rules: [{ required: true, message: 'Please input your CNIC!' }],
                })(
                  <AutoComplete
                    placeholder="CNIC"
                  >
                    <Input />
                  </AutoComplete>
                )}
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                })(
                  <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                )}
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">Register</Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
      <br />
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(Register);

export default WrappedNormalLoginForm;
