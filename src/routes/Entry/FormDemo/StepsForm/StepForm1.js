import React from 'react'
import {inject,observer} from'mobx-react'

import {Card, Alert, Divider, Select, Steps, Input, Button, Form, Icon, BackTop} from 'antd'

const {Step} = Steps;
const {Option} = Select;
const formItemLayout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 18,
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        offset: 5
    }
}

@inject('stepFormStore') @observer @Form.create()
class StepForm1 extends React.Component {
    nextStep = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log(111,this.props) /***当注入observer时，就调用了store内部的方法***/
                this.props.stepFormStore.setInfo(values)
                this.props.stepFormStore.setCurrent(1)
            }
        })
    }

    /*****hideRequiredMark: 隐藏所有表单项的必选标记*****/
    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <div style={{marginTop:50}}>
                <Form className='stepForm' hideRequiredMark style={{maxWidth:700,margin:'0 auto'}}>
                    <Form.Item {...formItemLayout} label="付款账户">
                        {getFieldDecorator('payAccount', {
                            initialValue: 'ant-design@alipay.com',
                            rules: [{required: true, message: '请选择付款账户'}],
                        })(
                            <Select placeholder="test@example.com">
                                <Option value="ant-design@alipay.com">ant-design@alipay.com</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="收款账户">
                        <Input.Group compact>
                            <Select defaultValue='alipay' style={{width: 100}}>
                                <Option value="alipay">支付宝</Option>
                                <Option value="bank">银行账户</Option>
                            </Select>
                            {getFieldDecorator('receiverAccount', {
                                initialValue: 'test@example.com',
                                rules: [
                                    {required: true, message: '请输入收款人账户'},
                                    {type: 'email', message: '账户名应为邮箱格式'},
                                ],
                            })(
                                <Input style={{width: 'calc(100% - 100px)'}}/>
                            )}
                        </Input.Group>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="收款人姓名">
                        {getFieldDecorator('receiverName', {
                            initialValue: 'Alex',
                            rules: [{required: true, message: '请输入收款人姓名'}],
                        })(<Input placeholder="请输入收款人姓名"/>)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="转账金额">
                        {getFieldDecorator('amount', {
                            initialValue: 500,
                            rules: [
                                {required: true, message: '请输入转账金额'},
                                {
                                    pattern: /^(\d+)((?:\.\d+)?)$/,
                                    message: '请输入合法金额数字',
                                },
                            ],
                        })(<Input prefix="￥" placeholder="请输入金额"/>)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type='primary' onClick={this.nextStep}>下一步</Button>
                    </Form.Item>
                </Form>

                <Divider/>
                <div style={{color:'#888888',marginBottom:10,marginLeft:20}}>
                    <h3 style={{color:'#888888'}}>说明</h3>
                    <h4 style={{color:'#888888'}}>转账到支付宝账户</h4>
                    <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>

                    <h4 style={{color:'#888888'}}s> 转账到银行卡</h4>
                    <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
                </div>
            </div>
        )
    }
}

export default StepForm1