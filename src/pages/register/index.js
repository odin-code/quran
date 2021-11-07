import React, { Component } from "react";
import { Form, Input, Button } from "antd";

import { Wrapper } from "../../styles/pages/register/style";

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <div className="body">
          <div className="register_page">
            <div className="header_content"></div>
            <div className="body_content">
              <Form
                labelCol={{ span: 8 }}
                WrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={false}
                onFinishFailed={false}
                autoComplete="off"
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item WrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default register;
