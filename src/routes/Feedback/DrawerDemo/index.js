import React from 'react'
import {Card, Row, Col, Drawer, Button, Form, Input, Select, DatePicker,Radio } from 'antd'
import Breadcrumb from '../../../components/Breadcrumb/index'
function test(){

}
const { Option } = Select;
const RadioGroup = Radio.Group;
class DrawerDemo extends React.Component {
    @test name
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            editVisible:false,
            parentVisible:false,
            childrenDrawer: false,
            placement: 'left'
        };
    }

    onChange = (e) => {
        this.setState({
            placement: e.target.value,
        });
    }


    showDrawer = () => {
        this.setState({
            visible: true
        });
    };
    onClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Breadcrumb arr={['反馈','抽屉']}></Breadcrumb>
                <Card title='何时使用' bordered={false}>
                    <ol>
                        <li>当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。</li>

                        <li>当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。</li>
                    </ol>
                </Card>
                <Card bordered={false} style={{marginTop:14}}>
                    <div>
                        <Button type="primary" onClick={this.showDrawer}>
                            基本用法
                        </Button>
                        <Drawer
                            title="Basic Drawer"
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>

                    <div style={{marginTop:14}}>

                        <Button type="primary" onClick={()=>this.setState({editVisible: true})}>
                            对象编辑
                        </Button>
                        <Drawer
                            title="Create"
                            width={720}
                            placement="right"
                            onClose={()=>this.setState({editVisible:false})}
                            maskClosable={false}
                            visible={this.state.editVisible}
                            style={{
                                height: 'calc(100% - 55px)',
                                overflow: 'auto',
                                paddingBottom: 53,
                            }}
                        >
                            <Form layout="vertical" hideRequiredMark>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item label="Name">
                                            {getFieldDecorator('name', {
                                                rules: [{ required: true, message: 'please enter user name' }],
                                            })(<Input placeholder="please enter user name" />)}
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Url">
                                            {getFieldDecorator('url', {
                                                rules: [{ required: true, message: 'please enter url' }],
                                            })(
                                                <Input
                                                    style={{ width: '100%' }}
                                                    addonBefore="http://"
                                                    addonAfter=".com"
                                                    placeholder="please enter url"
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item label="Owner">
                                            {getFieldDecorator('owner', {
                                                rules: [{ required: true, message: 'Please select an owner' }],
                                            })(
                                                <Select placeholder="Please select an owner">
                                                    <Option value="xiao">Xiaoxiao Fu</Option>
                                                    <Option value="mao">Maomao Zhou</Option>
                                                </Select>
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Type">
                                            {getFieldDecorator('type', {
                                                rules: [{ required: true, message: 'Please choose the type' }],
                                            })(
                                                <Select placeholder="Please choose the type">
                                                    <Option value="private">Private</Option>
                                                    <Option value="public">Public</Option>
                                                </Select>
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item label="Approver">
                                            {getFieldDecorator('approver', {
                                                rules: [{ required: true, message: 'Please choose the approver' }],
                                            })(
                                                <Select placeholder="Please choose the approver">
                                                    <Option value="jack">Jack Ma</Option>
                                                    <Option value="tom">Tom Liu</Option>
                                                </Select>
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="DateTime">
                                            {getFieldDecorator('dateTime', {
                                                rules: [{ required: true, message: 'Please choose the dateTime' }],
                                            })(
                                                <DatePicker.RangePicker
                                                    style={{ width: '100%' }}
                                                    getPopupContainer={trigger => trigger.parentNode}
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={24}>
                                        <Form.Item label="Description">
                                            {getFieldDecorator('description', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'please enter url description',
                                                    },
                                                ],
                                            })(<Input.TextArea rows={4} placeholder="please enter url description" />)}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                            <div style={{position: 'absolute', bottom: 0, width: '100%', borderTop: '1px solid #e8e8e8', padding: '10px 16px', textAlign: 'right', left: 0, background: '#fff', borderRadius: '0 0 4px 4px',}}>
                                <Button style={{marginRight: 8}} onClick={()=>this.setState({editVisible:false})}>
                                    Cancel
                                </Button>
                                <Button onClick={()=>this.setState({editVisible:false})} type="primary">Submit</Button>
                            </div>
                        </Drawer>
                    </div>

                    <div style={{marginTop:14}}>
                        <Button type="primary" onClick={()=>this.setState({parentVisible:true})}>
                            多层抽屉
                        </Button>
                        <Drawer
                            title="Multi-level drawer"
                            width={520}
                            closable={false}
                            onClose={()=>this.setState({parentVisible:false})}
                            visible={this.state.parentVisible}
                        >
                            <Button type="primary" onClick={()=>this.setState({childrenDrawer:true})}>
                                This is one-level drawer
                            </Button>
                            <Drawer
                                title="Two-level Drawer"
                                width={320}
                                closable={false}
                                onClose={()=>this.setState({childrenDrawer:false})}
                                visible={this.state.childrenDrawer}
                            >
                                This is two-level drawer
                            </Drawer>
                            <div style={{position: 'absolute', bottom: 0, width: '100%', borderTop: '1px solid #e8e8e8', padding: '10px 16px', textAlign: 'right', left: 0, background: '#fff', borderRadius: '0 0 4px 4px',}}>
                                <Button style={{marginRight: 8,}} onClick={()=>this.setState({parentVisible:false})}>
                                    Cancel
                                </Button>
                                <Button onClick={()=>this.setState({parentVisible:false})} type="primary">
                                    Submit
                                </Button>
                            </div>
                        </Drawer>
                    </div>

                    <div style={{marginTop:14}}>
                        <RadioGroup
                            style={{ marginRight: 8 }}
                            defaultValue={this.state.placement}
                            onChange={this.onChange}
                        >
                            <Radio value="top">top</Radio>
                            <Radio value="right">right</Radio>
                            <Radio value="bottom">bottom</Radio>
                            <Radio value="left">left</Radio>
                        </RadioGroup>
                        <Button type="primary" onClick={()=>this.setState({placementVisible:true})}>
                            Open
                        </Button>
                        <Drawer
                            title="Basic Drawer"
                            placement={this.state.placement}
                            closable={false}
                            onClose={()=>this.setState({placementVisible:false})}
                            visible={this.state.placementVisible}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>
                </Card>
            </div>
        )
    }
}

const DrawerDemo1 = Form.create()(DrawerDemo);
export default DrawerDemo1