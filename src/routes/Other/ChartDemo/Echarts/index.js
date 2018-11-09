import React from 'react'
import Breadcrumb from '../../../../components/Breadcrumb/index'
import {Card, Row, Col} from 'antd'

import EchartsArea from "./EchartsArea";   //区域图
import EchartsForce from "./EchartsForce";   //关系图
import EchartsPie from "./EchartsPie";   //饼图
import EchartsEffectScatter  from './EchartsEffectScatter' //分散图

class EchartDemo extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb arr={['其他', '图表', 'echarts']}></Breadcrumb>

                <Card style={{marginTop: 14}} bordered={false} title='区域图'>
                    <EchartsArea/>
                </Card>
                <Row gutter={10}>
                    <Col span={12}>
                        <Card style={{marginTop: 14}} bordered={false} title='关系图'>
                            <EchartsForce/>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card style={{marginTop: 14}} bordered={false} title='饼图'>
                        <EchartsPie/>
                        </Card>
                    </Col>
                </Row>

                <Card style={{marginTop: 14}} bordered={false} title='散点图'>
                    <EchartsEffectScatter/>
                </Card>

            </div>
        )
    }
}

export default EchartDemo