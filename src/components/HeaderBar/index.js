import React from 'react'
import {Icon, Badge, Dropdown, Menu, Modal} from 'antd'
import screenfull from 'screenfull'  //全屏插件
import './style.css'
import {isAuthenticated} from '../../utils/Session'
import {inject} from 'mobx-react'
import { withRouter, } from 'react-router-dom'
import avatar from './img/0431331X3_1.jpg'
import {observer} from "mobx-react/index";

@withRouter @inject('appStore') @observer
class HeaderBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            icon: 'fullscreen',
            visible: false
        }
    }

    // 组件渲染之后调用，只调用一次
    componentDidMount() {
        screenfull.onchange(() => {
            this.setState({
                icon: screenfull.isFullscreen ? 'fullscreen-exit' : 'fullscreen'
            })
        })
    }

    //组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
    componentWillUnmount() {
        screenfull.off('change')
    }

    //如果未激活则请求全屏，否则退出。
    screenfullToggle = () => {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }

    logout = () => {
        this.props.appStore.toggleLogin(false)
        this.props.history.push("/login")
    }

    render() {
        // console.log(222,this.props)
        const menu = (
            <Menu className='menu'>
                <Menu.ItemGroup title='用户中心' className='menu-group'>
                    <Menu.Item>你好-{isAuthenticated()}</Menu.Item>
                    <Menu.Item>个人信息</Menu.Item>
                    <Menu.Item onClick={this.logout}>退出登录</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title='设置中心' className='menu-group'>
                    <Menu.Item>个人设置</Menu.Item>
                    <Menu.Item>系统设置</Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        )

        return (
            <div style={{paddingRight: 50}}>
                <Icon style={styles.marginSpace} type={this.state.icon} theme="outlined"
                      onClick={this.screenfullToggle}/>
                <span style={styles.marginSpace}>
                        <Badge count={5}>
                            <Icon type="notification"/>
                        </Badge>
                    </span>
                <Dropdown overlay={menu}>
                    <img onClick={() => this.setState({visible: true})} style={styles.avatarImg} src={avatar} alt=""/>
                </Dropdown>
                <Modal
                    visible={this.state.visible}
                    footer={null} closable={false}
                    onOk={() => this.setState({visible: false})}
                    onCancel={() => this.setState({visible: false})}
                >
                    <img src={avatar} alt="" width='100%'/>
                </Modal>

            </div>
    )
    }
    }

    const styles = {
        avatarImg: {
        width: '40px',
        height: '40px',
        borderRadius: '50%'
    },
        marginSpace: {
        marginRight: "35px"
    },
    }
    export default HeaderBar