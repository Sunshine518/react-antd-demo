import React from 'react'
import {Card, Modal, Button} from 'antd'
import Breadcrumb from '../../../components/Breadcrumb/index'

const confirm = Modal.confirm;

/***确认对话框****/
function showConfirm() {
    confirm({
        title: 'Do you want to delete these items?',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {},
    });
}


function showConfirm() {
    confirm({
        title: 'Do you Want to delete these items?',
        content: 'Some descriptions',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

function showDeleteConfirm1() {
    confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

function info() {
    Modal.info({
        title: 'This is a notification message',
        content: (
            <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </div>
        ),
        onOk() {},
    });
}

function success() {
    Modal.success({
        title: 'This is a success message',
        content: 'some messages...some messages...',
    });
}

function error() {
    Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
    });
}

function warning() {
    Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
    });
}

function showPropsConfirm() {
    confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        okButtonProps: {
            disabled: true,
        },
        cancelText: 'No',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

class ModalDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ModalText: 'Content of the modal',
            visible: false,
            asyncVisible:false
    }
    }

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                asyncVisible: false,
                confirmLoading: false,
            });
        }, 2000);
    }


    render() {
        const { asyncVisible, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <Breadcrumb arr={['反馈','对话框']}></Breadcrumb>
                <Card bordered={false} title='何时使用'>
                    <ol>
                        <li>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</li>
                        <li>另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 antd.Modal.confirm() 等方法。</li>
                    </ol>
                </Card>
                <Card bordered={false} style={{marginTop:14}}>
                    <div>
                    <Button onClick={() => this.setState({visible: true})}>
                        基本用法
                    </Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={() => this.setState({visible: false})}
                        onCancel={() => this.setState({visible: false})}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                    </div>

                    <div style={{marginTop:14}}>
                        <Button  onClick={()=>this.setState({asyncVisible:true})}>
                            异步关闭
                        </Button>
                        <Modal title="Title"
                               visible={asyncVisible}
                               onOk={this.handleOk}
                               confirmLoading={confirmLoading}
                               onCancel={()=>this.setState({asyncVisible:false})}
                        >
                            <p>{ModalText}</p>
                        </Modal>
                    </div>

                    <div style={{marginTop:14}}>
                        <Button onClick={showConfirm}>
                            对话框
                        </Button>
                    </div>

                    <div style={{marginTop:14}}>
                        <Button onClick={showConfirm}>
                            Confirm
                        </Button>&emsp;
                        <Button onClick={showDeleteConfirm1} type="dashed">
                            Delete
                        </Button>&emsp;
                        <Button onClick={showPropsConfirm} type="dashed">
                            With extra props
                        </Button>
                    </div>

                    <div  style={{marginTop:14}}>
                        <Button onClick={info}>信息提示</Button>&emsp;
                        <Button onClick={success}>成功</Button>&emsp;
                        <Button onClick={error}>错误</Button>&emsp;
                        <Button onClick={warning}>警告</Button>
                    </div>,
                </Card>


            </div>
        )
    }
}


export default ModalDemo