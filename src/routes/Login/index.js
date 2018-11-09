import React from 'react'
import {Form, Input, message} from 'antd'
import {withRouter} from 'react-router-dom'
import {inject,observer} from 'mobx-react/index'
import 'animate.css'
import './style.css'


/***登录表单***/
@withRouter @inject('appStore') @observer @Form.create()
class LoginForm extends React.Component {
    loginSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                /***判断用户是否存在，且进行校证，检测用户名及密码是否与注册一致***/
                const users = this.props.appStore.users
                const result = users.find(item => item.username === values.username)
                if (!result) {
                    this.props.form.setFields({
                        username: {
                            value: values.username,
                            errors: [new Error('用户名不存在')]
                        }
                    })
                    return
                } else {
                    /****检测密码是否错误****/
                    if (result.password !== values.password) {
                        this.props.form.setFields({
                            password: {
                                value: values.password,
                                errors: [new Error('密码错误')]
                            }
                        })
                        return
                    }
                }
                /****当用户名与密码一致时，跳转至/首页******/
                this.props.appStore.toggleLogin(true, {username: values.username})
                const {from} = this.props.location.state || {from: {pathname: '/'}}
                this.props.history.push(from)
            }
        });
    };
    register = () => {
        this.props.switchShowBox('register')
        setTimeout(() => this.props.form.resetFields(), 500)     //重置表单
    }


    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <div className={this.props.className}>
                <h3 className='title'>管理员登录</h3>
                <Form onSubmit={this.loginSubmit}>
                    <Form.Item>
                        {getFieldDecorator('username', {rules: [{required: true, message: '请输入用户名'}]})(
                            <Input maxLength={16} placeholder='用户名'/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {rules: [{required: true, message: '请输入密码'}]})(
                            <Input type='password' maxLength={16} placeholder='密码'/>
                        )}
                    </Form.Item>
                    <div className='bottom'>
                        <input className='loginBtn' type="submit" value='登录'/>
                        <span className='registerBtn' onClick={this.register}>注册</span>
                    </div>
                </Form>
                <div className='footer'>
                    <div>欢迎登陆后台管理系统</div>
                </div>
            </div>
        )
    }
}

/****用户注册表单*****/
@withRouter @inject('appStore') @observer @Form.create()
class RegisterForm extends React.Component {
    registerSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const users = this.props.appStore.users
                /****检测用户名是否已经被注册过，如果已经被注册过将返回*****/
                const result = users.find(item => item.username === values.registerUsername)
                if (result) {
                    this.props.form.setFields({
                        registerUsername: {
                            value: values.registerUsername,
                            errors: [new Error('用户名已存在')
                            ]
                        }
                    })
                    return
                }
                /***没有注册过直接将值传入appStore里面****/
                const obj = [...this.props.appStore.users, {
                    username: values.registerUsername,
                    password: values.registerPassword
                }]
                localStorage.setItem('users', JSON.stringify(obj))
                //使用localstorage.setItem(name,value)存储JSON对象时会发现浏览器存储的内容为[object,object],
                // 并不是我们想要的内容，这是因为我们在存储的时候没有进行类型转换，
                // 因此我们在使用localstorage.setItem()进行对象存储之前需要使用JSON.stringify(object)进行类型转换，
                // 转换成JSON字符串后进行存储就会是我们想要的样子了{‘xxx’:‘11111’}
                this.props.appStore.initUsers()
                message.success('注册成功')
            }
        });
    }

    gobackLogin = () => {
        this.props.switchShowBox('login')
        setTimeout(() => this.props.form.resetFields(), 500)
    }

    render() {
        const {getFieldDecorator, getFieldValue} = this.props.form
        return (
            <div className={this.props.className}>
                <h3 className='title'>管理员注册</h3>
                <Form onSubmit={this.registerSubmit}>
                    <Form.Item>
                        {getFieldDecorator('registerUsername', {
                            validateFirst: true,
                            rules: [
                                {required: true, message: '用户名不能为空'},
                                {pattern: '^[^ ]+$', message: '不能输入空格'},
                            ]
                        })(
                            <Input maxLength={16} placeholder='用户名'/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('registerPassword', {
                            validateFirst: true,
                            rules: [
                                {required: true, message: '密码不能为空'},
                                {pattern: '^[^ ]+$', message: '密码不能有空格'}
                            ]
                        })(
                            <Input type='password' maxLength={16} placeholder='密码'/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('confirmPassword', {
                            validateFirst: true,
                            rules: [
                                {required: true, message: '请确认密码'},
                                {
                                    validator: (rule, value, callback) => {
                                        if (value && value !== getFieldValue('registerPassword')) {
                                            callback('两次输入不一致！')
                                        }
                                        callback()
                                    }
                                },
                            ]
                        })(
                            <Input type='password' maxLength={16} placeholder='确认密码'/>
                        )}
                    </Form.Item>
                    <div className='bottom'>
                        <input className='loginBtn' type="submit" value='注册'/>
                        <span className='registerBtn' onClick={this.gobackLogin}>返回登录</span>
                    </div>
                </Form>
                <div className='footer'>
                    <div>欢迎登陆后台管理系统</div>
                </div>
            </div>
        )
    }
}

@withRouter @inject('appStore') @observer
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showBox: 'login'
        }
    }

    switchShowBox = (box) => {
        this.setState({
            showBox: box
        })
    }


    //组件加载后调用
    componentDidMount(){
        this.props.appStore.initUsers()
    }

    render() {
        const {showBox} = this.state


        console.log(111,this.props.appStore.users.slice() )

        return (

            <div id='login-page'>
                <div className='container'>
                    <LoginForm
                        className={showBox === 'login' ? 'box showBox' : 'box hiddenBox'}
                        switchShowBox={this.switchShowBox}/>
                    <RegisterForm
                        className={showBox === 'register' ? 'box showBox' : 'box hiddenBox'}
                        switchShowBox={this.switchShowBox}/>
                </div>
            </div>
        )
    }
}

export default Login

