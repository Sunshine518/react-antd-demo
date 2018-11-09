import React from 'react'
import {Card, Menu, Dropdown, Button, Row, Col, Radio, Icon} from 'antd';
import './sytle.css'
import Breadcrumb from '../../../components/Breadcrumb/index'

class ButtonDemo extends React.Component {
    state = {
        size: 'default',
        loading: false,
        iconLoading: false,
    };

    handleSizeChange = (e) => {
        this.setState({size: e.target.value});
    }

    enterLoading = () => {
        this.setState({loading: true});
    }

    enterIconLoading = () => {
        this.setState({iconLoading: true});
    }

    render() {
        function handleMenuClick(e) {
            // console.log('click', e);
        }

        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );

        const size = this.state.size;
        return (
            <div>
                <Breadcrumb arr={['基本','按钮']}/>
                <Card title="何时使用" bordered={false}>
                    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
                </Card>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card bordered={false} className='buttonItem'>
                            <Button type="primary">Primary</Button>&emsp;
                            <Button>Default</Button>&emsp;
                            <Button type="dashed">Dashed</Button>&emsp;
                            <Button type="danger">Danger</Button>
                        </Card>

                        <Card bordered={false} className='buttonItem'>
                            <Radio.Group value={size} onChange={this.handleSizeChange}>
                                <Radio.Button value="large">Large</Radio.Button>
                                <Radio.Button value="default">Default</Radio.Button>
                                <Radio.Button value="small">Small</Radio.Button>
                            </Radio.Group>
                            <p style={{paddingTop: '1em'}}>
                                <Button type="primary" size={size}>Primary</Button>&emsp;
                                <Button size={size}>Normal</Button>&emsp;
                                <Button type="dashed" size={size}>Dashed</Button>&emsp;
                                <Button type="danger" size={size}>Danger</Button>&emsp;
                            </p>
                            <div>
                                <Button type="primary" shape="circle" icon="download" size={size}/>&emsp;
                                <Button type="primary" icon="download" size={size}>Download</Button>
                            </div>
                            <div style={{paddingTop: '1em'}}>
                                <Button.Group size={size}>
                                    <Button type="primary"><Icon type="left"/>Backward</Button>
                                    <Button type="primary">Forward<Icon type="right"/></Button>
                                </Button.Group>
                            </div>
                        </Card>
                    </Col>
                    <Col span={12} className='buttonItem'>
                        <Card bordered={false}>
                            <Button type="primary" shape="circle" icon="search"/>&emsp;
                            <Button type="primary" icon="search">Search</Button>&emsp;
                            <Button shape="circle" icon="search"/>&emsp;
                            <Button icon="search">Search</Button>
                            <div style={{paddingTop: '1em'}}>
                                <Button shape="circle" icon="search"/>&emsp;
                                <Button icon="search">Search</Button>&emsp;
                                <Button type="dashed" shape="circle" icon="search"/>&emsp;
                                <Button type="dashed" icon="search">Search</Button>
                            </div>
                        </Card>
                    </Col>
                    <Col span={12} className='buttonItem'>
                        <Card bordered={false}>
                            <div>
                                <Button type="primary">primary</Button>&emsp;
                                <Button>secondary</Button>&emsp;
                                <Dropdown overlay={menu}>
                                    <Button>
                                        Actions <Icon type="down"/>
                                    </Button>
                                </Dropdown>
                            </div>
                        </Card>

                        <Card bordered={false} className='buttonItem'>
                            <div>
                                <Button type="primary" loading>Loading</Button>&emsp;
                                <Button type="primary" size="small" loading>Loading</Button>
                            </div>
                            <div style={{paddingTop:'1em'}}>
                                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                                    Click me!
                                </Button>&emsp;
                                <Button type="primary" icon="poweroff" loading={this.state.iconLoading}
                                        onClick={this.enterIconLoading}>
                                    Click me!
                                </Button>
                            </div>
                            <div style={{paddingTop:'1em'}}>
                                <Button shape="circle" loading/>&emsp;
                                <Button type="primary" shape="circle" loading/>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default ButtonDemo