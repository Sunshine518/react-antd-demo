import React from 'react'
import {inject, observer} from 'mobx-react'
import {Form, Divider, Input, Button, Alert} from 'antd'

import {digitUppercase} from '../../../../utils/utils'  //将金额数转换大写

const formItemLayout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
};

@inject('stepFormStore') @observer @Form.create()
class StepForm2 extends React.Component {
    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.stepFormStore.setCurrent(2)
            }
        })
    }
    prevSubmit = () => {
        this.props.stepFormStore.setCurrent(0)
    }

    render() {
        const {getFieldDecorator} = this.props.form
        console.log(this.props.stepFormStore.info)
        return (
            <div style={{margin:'50px auto 0'}}>
                <Form style={{maxWidth:500,margin:'0 auto'}}>
                    <Alert closable showIcon message="确认转账后，资金将直接打入对方账户，无法退回。" style={{width:500,marginBottom:24}}/>
                    <Form.Item {...formItemLayout} label="付款账户">
                        {this.props.stepFormStore.info.payAccount}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="收款账户">
                        {this.props.stepFormStore.info.receiverAccount}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="收款人姓名">
                        {this.props.stepFormStore.info.receiverName}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="收款金额">
                        <span>{this.props.stepFormStore.info.amount}</span>
                        <span>（{digitUppercase(this.props.stepFormStore.info.amount)}）</span>
                    </Form.Item>
                    <Divider/>

                    <Form.Item {...formItemLayout} label="支付密码" required={false}>
                        {getFieldDecorator('password', {
                            initialValue: '123456',
                            rules: [
                                {
                                    required: true,
                                    message: '需要支付密码才能进行支付',
                                },
                            ],
                        })(<Input type="password" autoComplete="off" style={{width: '80%'}}/>)}
                    </Form.Item>
                    <Form.Item style={{textAlign:'center'}}>
                        <Button type="primary" onClick={this.handleSubmit}>提交</Button>&nbsp;&nbsp;
                        <Button onClick={this.prevSubmit}>上一步</Button>
                        {/*<Button onClick={()=>this.props.stepFormStore.setCurrent(0)}>上一步</Button>*/}
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default StepForm2