import React,{Component} from 'react'
import Breadcrumb from '../../../components/Breadcrumb/index'
import {Card,Collapse ,Row,Col} from 'antd'

class CollapseDemo extends React.Component{


    render(){
        const Panel = Collapse.Panel;

        const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
        };

        return(
            <div>
                <Breadcrumb arr={['显示','折叠面板']}></Breadcrumb>
                <Card bordered={false} title='如何使用'>对复杂区域进行分组和隐藏，保持页面的整洁。</Card>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card bordered={false} style={{marginTop:14}} title='基本用法'>
                            <Collapse defaultActiveKey={['1']}>
                                <Panel header="This is panel header 1" key="1">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="This is panel header 2" key="2">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="This is panel header 3" key="3" disabled>
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </Card>
                        <Card  bordered={false} style={{marginTop:14}}  title='手风琴-每次只打开一个tab'>
                            <Collapse accordion>
                            <Panel header="This is panel header 1" key="1">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 2" key="2">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 3" key="3">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card bordered={false} style={{marginTop:14}}  title='简洁风格-无边框'>
                            <Collapse bordered={false} defaultActiveKey={['1']}>
                                <Panel header="This is panel header 1" key="1">
                                    {text}
                                </Panel>
                                <Panel header="This is panel header 2" key="2">
                                    {text}
                                </Panel>
                                <Panel header="This is panel header 3" key="3">
                                    {text}
                                </Panel>
                            </Collapse>
                        </Card>
                        <Card bordered={false} style={{marginTop:14}} title='自定义面板'>
                            <Collapse bordered={false} defaultActiveKey={['1']}>
                                <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CollapseDemo