import React from 'react'
import {Card, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button,AutoComplete ,message} from 'antd';
import Breadcrumb from '../../../components/Breadcrumb'

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;  //站点

const residences = [{
    value: 'hubei',
    label: '湖北',
    children: [
        {
            value: 'wuhan',
            label: '武汉',
            children: [{
                value: 'caidian',
                label: '蔡甸',
            }, {
                value: 'zhuankou',
                label: '沌口',
            }],
        },
        {
            value: 'xiaogan',
            label: '孝感',
            children: [{
                value: 'dongshantou',
                label: '东山头',
            }],
        }],
},
    {
        value: 'guangdong',
        label: '广东',
        children: [
            {
                value: 'shenzhen',
                label: '深圳',
                children: [{
                    value: 'futian',
                    label: '福田',
                }],
            }],
    }]

@Form.create()
class BasicsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            autoCompleteResult: [],  //站点
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (err) {
                message.warning('请先填写正确的表单');
            }else{
                // console.log(values)
                message.success('提交成功')
            }
        });
    }


    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (!form.getFieldValue('password')) {
            callback('请输入上面的密码')
        }
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入不一致');
        }
        callback();
    }

    //站点
    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({autoCompleteResult});
    }


    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 4},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 10},
                sm: {span: 12},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 12,
                    offset: 4,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );


        //站点

        const {autoCompleteResult} = this.state;
        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <div>
                <Breadcrumb arr={['输入','表单','基础表单']}></Breadcrumb>
                <Card bordered={false} title='何时使用'>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景</Card>
                <Card bordered={false} style={{marginTop: 14}}>
                    <Form onSubmit={this.handleSubmit} style={{width: '70%', margin: '0 auto'}}>
                        <FormItem{...formItemLayout} label="邮箱">
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: '请输入正确的邮箱',
                                }, {
                                    required: true, message: '请填写邮箱',
                                }],
                            })(<Input/>)}
                        </FormItem>
                        <FormItem{...formItemLayout} label="密码">
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: '请输入密码',
                                }, {
                                    min: 6,
                                    message: '密码至少为6个字符'
                                }, {
                                    max: 16,
                                    message: '密码最多为16个字符'
                                }, {
                                    whitespace: true,
                                    message: '密码不能有空格'
                                }],
                            })(
                                <Input type="password"/>
                            )}
                        </FormItem>
                        <FormItem{...formItemLayout} label="确认密码" required>
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    validator: this.compareToFirstPassword,
                                }],
                            })(<Input type="password"/>)}
                        </FormItem>
                        <FormItem{...formItemLayout} label={(
                            <span>昵称&nbsp;
                                <Tooltip title="请输入您的昵称">
                                     <Icon type="question-circle-o"/>
                                 </Tooltip>
                            </span>)}>
                            {getFieldDecorator('nickname', {
                                rules: [{required: true, message: '请输入您的昵称'}],
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem{...formItemLayout} label="居住地">
                            {getFieldDecorator('residence', {
                                rules: [{
                                    type: 'array',
                                    required: true,
                                    message: '请选择居住地'
                                }],
                            })(
                                <Cascader options={residences} placeholder=''/>
                            )}
                        </FormItem>
                        <FormItem{...formItemLayout} label="电话">
                            {getFieldDecorator('phone', {
                                rules: [{
                                    required: true,
                                    len: 11,
                                    pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
                                    message: '请输入正确的11位手机号码'
                                }],
                            })(
                                <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
                            )}
                        </FormItem>
                        <FormItem{...formItemLayout} label="个人站点">
                            {getFieldDecorator('website', {
                                rules: [{required: true, message: '请输入个人站点'}],
                            })(
                                <AutoComplete
                                    dataSource={websiteOptions}
                                    onChange={this.handleWebsiteChange}
                                    placeholder=""
                                >
                                    <Input/>
                                </AutoComplete>
                            )}
                        </FormItem>
                        <FormItem{...formItemLayout} label="验证">
                            <Row gutter={8}>
                                <Col span={12}>
                                    {getFieldDecorator('captcha', {
                                        rules: [{required: true, message: '请输入验证码'}],
                                    })(<Input/>)}
                                </Col>
                                <Col span={12}>
                                    <Button>获取验证码</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox>我已阅读并同意<a href="">协议</a></Checkbox>
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout} style={{textAlign: 'center'}}>
                            <Button type="primary" htmlType="submit" disabled={!this.props.form.getFieldValue('agreement')}>提交</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}


export default BasicsForm
