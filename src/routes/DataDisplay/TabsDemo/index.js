import React,{Component} from 'react'
import Breadcrumb from '../../../components/Breadcrumb/index'
import {Card,Row,Col,Tabs,Icon,Radio,Select,Button } from 'antd'

const TabPane = Tabs.TabPane;
const Option = Select.Option;
function callback(key) {
    console.log(key);
}

class TabsDemo extends React.Component{
    constructor(prop){
        super(prop)
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state={
            mode:'top',
            tabPosition: 'top',
            activeKey: panes[0].key,
            panes,
        }
    }

    handleModeChange = (e) => {
        // console.log(e)
        const mode = e.target.value;
        this.setState({ mode });
    }

    changeTabPosition = (tabPosition) => {
        this.setState({ tabPosition });
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }


    render(){
        return(
            <div>
                <Breadcrumb arr={['显示','标签页']}></Breadcrumb>
                <Card title='何时使用' bordered={false}>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</Card>

                <Row gutter={16}>
                    <Col span={12}>
                        <Card bordered={false} style={{marginTop:14}} title='基本用法及禁用'>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                                <TabPane disabled tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                                <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
                            </Tabs>,
                        </Card>
                        <Card bordered={false} style={{marginTop:14}} title='有图标的标签'>
                            <Tabs defaultActiveKey="2">
                                <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                                    Tab 1
                                </TabPane>
                                <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                                    Tab 2
                                </TabPane>
                            </Tabs>,
                        </Card>
                        <Card  bordered={false} style={{marginTop:14}} title='卡片式标签'>
                            <Tabs onChange={callback} type="card">
                                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card bordered={false} style={{marginTop:14}} title=''>
                            <Radio.Group onChange={this.handleModeChange} value={this.state.mode} style={{ marginBottom: 8 }}>
                                <Radio.Button value="top">水平</Radio.Button>
                                <Radio.Button value="left">垂直</Radio.Button>
                            </Radio.Group>
                            <Tabs
                                defaultActiveKey="1"
                                tabPosition={this.state.mode}
                                style={{ height: 220 }}
                            >
                                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                                <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                                <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                                <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                                <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                                <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                                <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                                <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
                            </Tabs>
                        </Card>
                        <Card bordered={false} style={{marginTop:14}} title='可变动位置标签'>
                            <div style={{ marginBottom: 16 }}>
                                Tab position：
                                <Select
                                    value={this.state.tabPosition}
                                    onChange={this.changeTabPosition}
                                    dropdownMatchSelectWidth={false}
                                >
                                    <Option value="top">top</Option>
                                    <Option value="bottom">bottom</Option>
                                    <Option value="left">left</Option>
                                    <Option value="right">right</Option>
                                </Select>
                            </div>
                            <Tabs tabPosition={this.state.tabPosition}>
                                <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
                                <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
                                <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
                            </Tabs>
                        </Card>
                        <Card  bordered={false} style={{marginTop:14}} title='动态-新增和关闭标签页'>
                            <div style={{ marginBottom: 16 }}>
                                <Button onClick={this.add}>ADD</Button>
                            </div>
                            <Tabs
                                hideAdd
                                onChange={this.onChange}
                                activeKey={this.state.activeKey}
                                type="editable-card"
                                onEdit={this.onEdit}
                            >
                                {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                            </Tabs>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default TabsDemo