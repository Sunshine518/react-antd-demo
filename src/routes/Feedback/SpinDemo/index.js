import React from 'react'
import {Card,Row,Col, Spin,Icon,Alert,Switch,Button } from 'antd'
import Breadcrumb from '../../../components/Breadcrumb/index'
import NProgress from 'nprogress'   //安装依赖引用进度条
import 'nprogress/nprogress.css'     //进度条样式直接引用

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

class SpinDemo extends React.Component{

    state = {
        loading: false,
        loading2:false
    }

    toggle = (value) => {
        console.log(value)
        this.setState({ loading: value });
    }

     /****将要装载，在render之前调用***/
    componentWillMount(){
        NProgress.start()
    }

    /****将要装载，在render之后调用***/
    componentDidMount(){
        NProgress.done()
    }

    /****在组件从 DOM 中移除之前立刻被调用***/
    componentWillUnmount(){
        //这里是防止下面调用NProgress.start()方法后离开组件后还未关闭
        NProgress.done()
    }

    NProgressStart = () => {
        NProgress.start()
        this.setState({
            loading2: true
        })
    }
    NProgressDone = () => {
        NProgress.done()
        this.setState({
            loading2: false
        })
    }

    render(){
        const container = (
            <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            />
        );
        return(
            <div>
                <Breadcrumb arr={['反馈','加载中']}></Breadcrumb>
                <Card title='何时使用'>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</Card>

                <Row gutter={16}>
                    <Col span={12}>
                        <Card style={{marginTop:14}} bordered={false}>
                            <Spin />&emsp;&emsp;
                            <span><Spin indicator={antIcon} /></span>
                        </Card>
                        <Card style={{marginTop:14}} bordered={false}>
                            <Spin tip="Loading...">
                                <Alert
                                    message="Alert message title"
                                    description="Further details about the context of this alert."
                                    type="info"
                                />
                            </Spin>
                        </Card>

                        <Card bordered={false} style={{marginTop:14}}>
                            <Button onClick={this.NProgressStart} loading={this.state.loading2}>页面顶部进度条加载</Button>&emsp;&emsp;
                            <Button onClick={this.NProgressDone}>顶部进度条加载完成</Button>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card style={{marginTop:14}} bordered={false}>
                            <Spin size="small" />&emsp;&emsp;
                            <Spin />&emsp;&emsp;
                            <Spin size="large" />
                        </Card>
                        <Card style={{marginTop:14}} bordered={false}>
                            <Spin spinning={this.state.loading} delay={500}>{container}</Spin>
                            <div style={{ marginTop: 16 }}>
                                Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default SpinDemo