import React from 'react'
import {Card, Button, notification,Tooltip ,Select,Icon}from 'antd'
import Breadcrumb  from '../../../components/Breadcrumb/index'
class NotificationDemo extends React.Component{


    render(){
        const { Option } = Select;
        const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
        const openNotification2 = () => {
            notification.open({
                message: 'Notification Title',
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        };

        const openNotification = () => {
            notification.open({
                message: 'Notification Title',
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        };

        const openNotification1 = () => {
            const args = {
                message: 'Notification Title',
                description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
                duration: 0,
            };
            notification.open(args);
        };

        const openNotificationWithIcon = (type) => {
            notification[type]({
                message: 'Notification Title',
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        };

        const openNotification4 = () => {
            notification.open({
                message: 'Notification Title',
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            });
        };

        const openNotification5 = () => {
            notification.open({
                message: 'Notification Title',
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                style: {
                    width: 600,
                    marginLeft: 335 - 600,
                },
            });
        };

        return(
            <div>
                <Breadcrumb arr={['反馈','通知提醒框']}></Breadcrumb>
                <Card bordered={false} title='何时使用'>
                    <p>在系统四个角显示通知提醒信息。经常用于以下情况：</p>
                    <ol>
                        <li>在较为复杂的通知内容。</li>

                        <li>在带有交互的通知，给出用户下一步的行动点。</li>

                        <li>在系统主动推送。</li>
                    </ol>
                </Card>

                <Card style={{marginTop:14}}>
                    <Tooltip title='最简单的用法，4.5 秒后自动关闭' placement='right'>
                    <div><Button type="primary" onClick={openNotification}>基本用法 </Button></div>
                    </Tooltip>

                    <div style={{marginTop:14}}>
                    <Tooltip title='关闭默认4.5s延时，将duration设为 0' placement='right'>
                    <div><Button type="primary" onClick={openNotification1}>取消自动关闭</Button></div>
                    </Tooltip>
                    </div>

                    <div style={{marginTop:14}}>
                        <Button onClick={() => openNotificationWithIcon('success')}>成功</Button>&emsp;
                        <Button onClick={() => openNotificationWithIcon('info')}>提醒</Button>&emsp;
                        <Button onClick={() => openNotificationWithIcon('warning')}>警告</Button>&emsp;
                        <Button onClick={() => openNotificationWithIcon('error')}>错误</Button>
                    </div>

                    <div style={{marginTop:14}}>
                        <Select
                            defaultValue="topRight"
                            style={{ width: 120, marginRight: 10 }}
                            onChange={(val) => {
                                notification.config({
                                    placement: val,
                                });
                            }}
                        >
                            {options.map(val=><Option key={val} value={val}>{val}</Option>)}
                        </Select>
                        <Button type="primary" onClick={openNotification2}>打开消息通知</Button>
                    </div>

                    <div style={{marginTop:14}}>
                    <Button type="primary" onClick={openNotification4}>自定义图标</Button>
                    </div>

                    <div style={{marginTop:14}}>
                        <Button type="primary" onClick={openNotification5}>自定义样式</Button>,
                    </div>
                </Card>
            </div>
        )
    }
}


export default NotificationDemo