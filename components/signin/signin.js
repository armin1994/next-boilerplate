import React, { PureComponent } from 'react';
import {
  Button, Col, Form, Icon, Row,
} from 'antd';
import { Input, Notification } from 'fluantd';
import Card from '../sign-card';

import 'fluantd/lib/input/style/index.less';
import 'fluantd/lib/notification/style/index.less';

const { Header, Body } = Card;
const FormItem = Form.Item;

class Signin extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    const { call, error, stateUpdate } = props;
    if (call) {
      if (!call.fetching) {
        if (error) {
          stateUpdate({
            call: null,
            error: null,
          });
          const message = 'Error';
          const description = 'Unexpected error, try again!';
          Notification('error', message, description);
        } else {
          const nextState = {
            call: null,
          };
          if (call.type === 'login') {
            nextState.step = 'twoFactor';
          }
          stateUpdate({
            ...nextState,
          });
        }
      }
    }
    return {};
  }

  state = {

  };

  submit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.serverUpdate({
          type: 'login',
          body: values,
        });
      }
    });
  };

  goTo = (e, screen) => {
    e.preventDefault();
    this.props.stateUpdate({
      step: screen,
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const suffix = <Icon type="mail" />;
    return (
      <Card>
        <Header>
          <img src="/login-icon.svg" />
          <div className="title">Login into your account</div>
          <p>
            Don't have an account?
            {' '}
            <a href="#" onClick={e => this.goTo(e, 'signup')}>Create New</a>
          </p>
        </Header>
        <Body>
          <Form>
            <FormItem>
              {getFieldDecorator('signinEmail', {
                rules: [
                  {
                    type: 'email', message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true, message: 'Please input your email!',
                  },
                ],
              })(
                <Input type="email" suffix={suffix} placeholder="Your Email" name="email" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('signinPass', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  type="password"
                  placeholder="Type your password"
                  name="pass"
                />,
              )}
            </FormItem>
            <Row className="signin-actions">
              <Col span={12} className="signin-actions-link">
                <a href="/signin">Forgot password?</a>
              </Col>
              <Col span={12}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="signin-actions-button pull-right"
                  onClick={this.submit}
                >
                Log in
                </Button>
              </Col>
            </Row>
          </Form>
        </Body>
      </Card>
    );
  }
}

const WrappedSignin = Form.create()(Signin);

export default WrappedSignin;
