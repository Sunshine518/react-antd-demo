import React from 'react'
import {Card, Steps, Button, message} from 'antd';
import Breadcrumb from '../../../../components/Breadcrumb'
import {inject, observer} from 'mobx-react'
import StepForm1 from './StepForm1'
import StepForm2 from './StepForm2'
import StepForm3 from './StepForm3'

const Step = Steps.Step;

@inject('stepFormStore') @observer
class StepsFormIndex extends React.Component {
    showStep = () => {
        switch (this.props.stepFormStore.current) {
            case 1:
                return <StepForm2/>
            case 2:
                return <StepForm3/>
            default :
                return <StepForm1/>
        }
    }

    render() {
        return (
            <div>
                <Breadcrumb arr={['输入', '表单', '分步表单']}></Breadcrumb>
                <Card bordered={false} title='何时使用'>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成</Card>
                <Card style={{marginTop: 14}} bordered={false}>
                    <Steps style={{width:750,margin:'0 auto'}} current={this.props.stepFormStore.current}>
                        <Step title='填写转账信息'/>
                        <Step title='确认转账信息'/>
                        <Step title='完成'/>
                    </Steps>
                    <div>{this.showStep()}</div>
                </Card>
            </div>
        )
    }
}


export default StepsFormIndex
