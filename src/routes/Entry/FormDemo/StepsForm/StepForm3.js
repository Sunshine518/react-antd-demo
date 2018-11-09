import React from 'react'
import {digitUppercase} from "../../../../utils/utils";
import {Form, Button, Icon} from 'antd'
import {inject, observer} from 'mobx-react'


const formItemLayout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
};

@inject('stepFormStore') @observer @Form.create()
class StepForm3 extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.iconBox}>
                    <Icon type='check-circle'/>
                </div>
                <h1 style={styles.success}>操作成功</h1>
                <p style={styles.successDesc}>预计两小时到账</p>

                <Form style={{width: 700, margin: '50px auto 0', backgroundColor: '#fafafa'}}>
                    <Form.Item {...formItemLayout} label="付款账户">
                        {this.props.stepFormStore.info.payAccount}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="收款账户">
                        {this.props.stepFormStore.info.receiverAccount}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="收款人姓名">
                        {this.props.stepFormStore.info.receiverName}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="收款金额">
                        <span>{this.props.stepFormStore.info.amount}</span>
                        <span>（{digitUppercase(this.props.stepFormStore.info.amount)}）</span>
                    </Form.Item>

                </Form>
                <Form.Item style={{textAlign: 'center'}} s>
                    <Button type="primary" onClick={() => this.props.stepFormStore.setCurrent(0)}>再转一笔</Button>
                </Form.Item>
            </div>
        )
    }
}

const styles = {
    iconBox: {
        fontSize: '72px',
        lineHeight: '72px',
        margin: '24px 0',
        color: '#52c41a',
        textAlign: 'center'
    },
    success: {
        fontSize: '24px',
        color: 'rgba(0,0,0,.85)',
        fontWeight: '500',
        lineHeight: '32px',
        marginBottom: '16px',
        textAlign: 'center',
    },
    successDesc: {
        fontSize: '14px',
        lineHeight: '22px',
        color: 'rgba(0,0,0,.45)',
        marginBottom: '24px',
        textAlign: 'center'
    }
}
export default StepForm3