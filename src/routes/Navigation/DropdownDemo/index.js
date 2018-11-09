import React, {Component} from 'react';
import {Card, Menu, Dropdown, Icon, message, Row, Col, Button} from 'antd';
import Breadcrumb from '../../../components/Breadcrumb/index'


const onClick = function ({key}) {
    message.info(`Click on item ${key}`);
};

const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

function handleMenuClick(e) {
    message.info(`Click on menu ${e.key} item.`)
}

const menu1 = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1"><Icon type="user"/>1st menu item</Menu.Item>
        <Menu.Item key="2"><Icon type="user"/>2nd menu item</Menu.Item>
        <Menu.Item key="3"><Icon type="user"/>3rd item</Menu.Item>
    </Menu>
);

const menu2 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
    </Menu>
);

const SubMenu = Menu.SubMenu;

const menu3 = (
    <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <SubMenu title="sub menu">
            <Menu.Item>3rd menu item</Menu.Item>
            <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
            <Menu.Item>5d menu item</Menu.Item>
            <Menu.Item>6th menu item</Menu.Item>
        </SubMenu>
    </Menu>
);

class DropDownDemo extends React.Component {

    handleButtonClick=(e)=> {
        message.info('Click on left button.');
        console.log('click left button', e);
    }

    render() {
        return (
            <div>
                <Breadcrumb arr={['导航', '下拉菜单']}/>
                <Card title='何时使用' bordered={false}>
                    <p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p>
                </Card>

                <Row gutter={16}>
                    <Col span={12} style={{marginTop: 14}}>
                        <Card bordered={false}>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" href="#">
                                    Hover me, Click menu item <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Card>
                        <Card bordered={false} style={{marginTop: 14}}>
                            <Dropdown.Button onClick={this.handleButtonClick} overlay={menu}>
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown.Button
                                onClick={this.handleButtonClick}
                                overlay={menu1}
                                disabled
                                style={{marginLeft: 8}}
                            >
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown overlay={menu1}>
                                <Button style={{marginLeft: 8}}>
                                    Button <Icon type="down"/>
                                </Button>
                            </Dropdown>
                        </Card>
                    </Col>
                    <Col span={12} style={{marginTop:14}}>
                        <Card bordered={false}>
                            <Dropdown overlay={menu2} placement="bottomLeft">
                                <Button>bottomLeft</Button>
                            </Dropdown>&emsp;
                            <Dropdown overlay={menu2} placement="bottomCenter">
                                <Button>bottomCenter</Button>
                            </Dropdown>&emsp;
                            <Dropdown overlay={menu2} placement="bottomRight">
                                <Button>bottomRight</Button>
                            </Dropdown>
                            <div style={{marginTop:14}}>
                            <Dropdown overlay={menu2} placement="topLeft">
                                <Button>topLeft</Button>
                            </Dropdown>&emsp;
                            <Dropdown overlay={menu2} placement="topCenter">
                                <Button>topCenter</Button>
                            </Dropdown>&emsp;
                            <Dropdown overlay={menu2} placement="topRight">
                                <Button>topRight</Button>
                            </Dropdown>
                            </div>
                        </Card>

                        <Card bordered={false} style={{marginTop:14}}>
                            <Dropdown overlay={menu3}>
                                <Button type="primary" className="ant-dropdown-link" href="#">
                                    Cascading menu <Icon type="down" />
                                </Button>
                            </Dropdown>,
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default DropDownDemo;
