import React, {Component} from 'react';
import Breadcrumb from '../../../components/Breadcrumb/index'
import {Card, Row, Col,Steps,Icon, Button, message ,Popover,Radio } from 'antd'
import './style.css'
const Step = Steps.Step;
const steps = [{
    title: 'First',
    content: 'First-content',
}, {
    title: 'Second',
    content: 'Second-content',
}, {
    title: 'Last',
    content: 'Last-content',
}];

const customDot = (dot, { status, index }) => (
    <Popover content={<span>step {index} status: {status}</span>}>
        {dot}
    </Popover>
);

class StepsDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            size: 'default',
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { size,current } = this.state;
        return (
            <div>
                <Breadcrumb arr={['导航', '步骤条']}></Breadcrumb>
                <Card bordered={false} style={{marginBottom: 14}} title='何时使用'>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</Card>

                <Row gutter={16}>
                    <Col span={12}>
                        <Card bordered={false} title='基本用法'>
                            <Steps current={1}>
                                <Step title="Finished" description="This is a description."/>
                                <Step title="In Progress" description="This is a description."/>
                                <Step title="Waiting" description="This is a description."/>
                            </Steps>,
                        </Card>
                        <Card bordered={false} title='带图标的步骤条' style={{marginTop:14}}>
                            <Steps>
                                <Step status="finish" title="Login" icon={<Icon type="user"/>}/>
                                <Step status="finish" title="Verification" icon={<Icon type="solution"/>}/>
                                <Step status="process" title="Pay" icon={<Icon type="loading"/>}/>
                                <Step status="wait" title="Done" icon={<Icon type="smile-o"/>}/>
                            </Steps>,
                        </Card>
                        <Card bordered={false} title='步骤运行错误' style={{marginTop:14}}>
                            <Steps current={1} status="error">
                                <Step title="Finished" description="This is a description"/>
                                <Step title="In Process" description="This is a description"/>
                                <Step title="Waiting" description="This is a description"/>
                            </Steps>
                        </Card>
                        <Card bordered={false} title='步骤切换' style={{marginTop:14}}>
                            <Steps current={current}>
                                {
                                    steps.map(item => <Step key={item.title} title={item.title}/>)}
                            </Steps>
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {
                                    current < steps.length - 1
                                    && <Button type="primary" onClick={() => this.next()}>Next</Button>
                                }
                                {
                                    current === steps.length - 1
                                    && <Button type="primary"
                                               onClick={() => message.success('Processing complete!')}>Done</Button>
                                }
                                {
                                    current > 0
                                    && (
                                        <Button style={{marginLeft: 8}} onClick={() => this.prev()}>
                                            Previous
                                        </Button>
                                    )
                                }
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card bordered={false} title='自定义点状步骤条'>
                            <Steps current={1} progressDot={customDot}>
                                <Step title="Finished" description="You can hover on the dot." />
                                <Step title="In Progress" description="You can hover on the dot." />
                                <Step title="Waiting" description="You can hover on the dot." />
                                <Step title="Waiting" description="You can hover on the dot." />
                            </Steps>
                        </Card>
                        <Card bordered={false} title='竖直方向的步骤条' style={{marginTop:14}}>
                            <Radio.Group style={{marginBottom: '1em'}}
                                         onChange={(e) => this.setState({size: e.target.value})}
                                         value={size}>
                                <Radio.Button value='small'>Small</Radio.Button>
                                <Radio.Button value='default'>Default</Radio.Button>
                            </Radio.Group>
                            <Steps direction="vertical" current={1}  size={size}>
                                <Step title="Finished" description="This is a description." />
                                <Step title="In Progress" description="This is a description." />
                                <Step title="Waiting" description="This is a description." />
                            </Steps>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default StepsDemo