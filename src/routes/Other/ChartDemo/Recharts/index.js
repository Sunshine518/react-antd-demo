import React from 'react'
import Breadcrumb from '../../../../components/Breadcrumb/index'
import {Card, Row, Col} from 'antd'

import RechartsSimpleLineChart from './RechartsSimpleLineChart'
import RechartsBarChart from './RechartsBarChart'
import RechartsRadialBarChart from './RechartsRadialBarChart'
import RechartsRadarChart from './RechartsRadarChart'

class RechartDemo extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb arr={['其他', '图表', 'recharts']}></Breadcrumb>

                <Card style={{marginTop: 14}} bordered={false} title='基础线形图'>
                    <RechartsSimpleLineChart/>
                </Card>

                <Card style={{marginTop: 14}} bordered={false} title='基础线形图'>
                    <RechartsBarChart/>
                </Card>

                <Row gutter={10}>
                    <Col span={12}>
                        <Card style={{marginTop: 14}} bordered={false} title='基础线形图'>
                            <RechartsRadialBarChart/>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card style={{marginTop: 14}} bordered={false} title='基础线形图'>
                            <RechartsRadarChart/>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default RechartDemo

