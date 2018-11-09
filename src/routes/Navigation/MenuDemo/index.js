import React, {Component} from 'react';
import {Row, Col, Card, Menu, Icon,Switch} from 'antd'
import Breadcrumb from '../../../components/Breadcrumb/index'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MenuDemo extends React.Component {
    state = {
        openKeys: ['sub1'],
        current: 'mail',
        mode: 'inline',
        theme: 'light',
    };
    handleClick = (e) => {
        console.log('click ', e);
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    handleClick1 = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    changeMode = (value) => {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }


    render() {
        return (
            <div>
                <Breadcrumb arr={['导航','导航菜单']}></Breadcrumb>
                <Card bordered={false} title='何时使用' style={{marginBottom:14}}>导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。</Card>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card bordered={false}>
                            <Row type='flex' align='middle'>
                                <Col span={12}>
                                    <Menu
                                        onClick={this.handleClick}
                                        style={{width: 256}}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline"
                                    >
                                        <SubMenu key="sub1"
                                                 title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                                            <MenuItemGroup key="g1" title="Item 1">
                                                <Menu.Item key="1">Option 1</Menu.Item>
                                                <Menu.Item key="2">Option 2</Menu.Item>
                                            </MenuItemGroup>
                                            <MenuItemGroup key="g2" title="Item 2">
                                                <Menu.Item key="3">Option 3</Menu.Item>
                                                <Menu.Item key="4">Option 4</Menu.Item>
                                            </MenuItemGroup>
                                        </SubMenu>
                                        <SubMenu key="sub2" title={<span><Icon
                                            type="appstore"/><span>Navigation Two</span></span>}>
                                            <Menu.Item key="5">Option 5</Menu.Item>
                                            <Menu.Item key="6">Option 6</Menu.Item>
                                            <SubMenu key="sub3" title="Submenu">
                                                <Menu.Item key="7">Option 7</Menu.Item>
                                                <Menu.Item key="8">Option 8</Menu.Item>
                                            </SubMenu>
                                        </SubMenu>
                                        <SubMenu key="sub4" title={<span><Icon
                                            type="setting"/><span>Navigation Three</span></span>}>
                                            <Menu.Item key="9">Option 9</Menu.Item>
                                            <Menu.Item key="10">Option 10</Menu.Item>
                                            <Menu.Item key="11">Option 11</Menu.Item>
                                            <Menu.Item key="12">Option 12</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                </Col>
                                <Col span={12}>
                                    内嵌菜单<br/>
                                    垂直菜单，子菜单内嵌在菜单区域。
                                </Col>
                            </Row>
                        </Card>

                        <Card bordered={false} style={{marginTop:14}}>
                            <Row type='flex' align='middle' >
                                <Col span={12}>
                                    <Menu
                                        mode="inline"
                                        openKeys={this.state.openKeys}
                                        onOpenChange={this.onOpenChange}
                                        style={{width: 256}}
                                    >
                                        <SubMenu key="sub1"
                                                 title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                                            <Menu.Item key="1">Option 1</Menu.Item>
                                            <Menu.Item key="2">Option 2</Menu.Item>
                                            <Menu.Item key="3">Option 3</Menu.Item>
                                            <Menu.Item key="4">Option 4</Menu.Item>
                                        </SubMenu>
                                        <SubMenu key="sub2" title={<span><Icon
                                            type="appstore"/><span>Navigation Two</span></span>}>
                                            <Menu.Item key="5">Option 5</Menu.Item>
                                            <Menu.Item key="6">Option 6</Menu.Item>
                                            <SubMenu key="sub3" title="Submenu">
                                                <Menu.Item key="7">Option 7</Menu.Item>
                                                <Menu.Item key="8">Option 8</Menu.Item>
                                            </SubMenu>
                                        </SubMenu>
                                        <SubMenu key="sub4" title={<span><Icon
                                            type="setting"/><span>Navigation Three</span></span>}>
                                            <Menu.Item key="9">Option 9</Menu.Item>
                                            <Menu.Item key="10">Option 10</Menu.Item>
                                            <Menu.Item key="11">Option 11</Menu.Item>
                                            <Menu.Item key="12">Option 12</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                </Col>
                                <Col span={12}>
                                    <p>只展开当前父级菜单</p>
                                    <p>点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。</p>
                                </Col>
                            </Row>
                        </Card>

                    </Col>

                    <Col span={12}>
                        <Card bordered={false} style={{height:190}}>
                            <Menu
                                onClick={this.handleClick1}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                            >
                                <Menu.Item key="mail">
                                    <Icon type="mail" />Navigation One
                                </Menu.Item>
                                <Menu.Item key="app" disabled>
                                    <Icon type="appstore" />Navigation Two
                                </Menu.Item>
                                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                                    <MenuItemGroup title="Item 1">
                                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Item 2">
                                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <Menu.Item key="alipay">
                                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                                </Menu.Item>
                            </Menu>
                        </Card>

                        <Card bordered={false} style={{marginTop:14}}>
                            <Switch onChange={this.changeMode} /> Change Mode
                            <span className="ant-divider" style={{ margin: '0 1em' }} />
                            <Switch onChange={this.changeTheme} /> Change Theme
                            <Menu
                                style={{ width: 256,marginTop:14 }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode={this.state.mode}
                                theme={this.state.theme}
                            >
                                <Menu.Item key="1">
                                    <Icon type="mail" />
                                    Navigation One
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="calendar" />
                                    Navigation Two
                                </Menu.Item>
                                <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Three</span></span>}>
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                    <SubMenu key="sub1-2" title="Submenu">
                                        <Menu.Item key="5">Option 5</Menu.Item>
                                        <Menu.Item key="6">Option 6</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Four</span></span>}>
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                    <Menu.Item key="9">Option 9</Menu.Item>
                                    <Menu.Item key="10">Option 10</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MenuDemo