import React, {Component} from 'react';
import {Table, Breadcrumb, Popconfirm, Divider, Button,Form, Input,Select } from 'antd';
import { Link} from 'react-router-dom'
import axios from 'axios'


const FormItem = Form.Item;
const Option = Select.Option;


class AdList extends Component {                  //定义一个类继承于react里面的一个基类叫Component

    // //查询事件
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                const name = values.name != undefined ? values.name : '';
                const advertisement_node_id = values.advertisement_node_id != undefined ? values.advertisement_node_id : '';

                axios.get(`https://movie.lc1017.com/api/admin/v1/advertisements?name=${name}&advertisement_node_id=${advertisement_node_id}`).then(response => {
                    this.setState({
                        advertisements: response.data.data
                    })
                })
            }
        });
    }

    //定义
    constructor(props) {
        super(props)
        this.state = {
            advertisements: [],
            advertisement_nodes:[]
        }
    }

    //读取数据
    componentDidMount() {
        axios.get(`https://movie.lc1017.com/api/admin/v1/advertisements`).then(res => {
            this.setState({
                advertisements: res.data.data
            })
        })

        axios.get(`https://movie.lc1017.com/api/admin/v1/advertisement_nodes`).then(res => {
            this.setState({
                advertisement_nodes: res.data.data
            })
        })
    }

    //delete删除方法
    delete = (recode) => {
        axios.delete(`https://movie.lc1017.com/api/admin/v1/advertisements/${recode.id}`).then(res => {
            this.setState((prevState, props) => {
                var index = prevState.advertisements.indexOf(recode)
                let advertisements = prevState.advertisements
                advertisements.splice(index, 1)
                return ({
                    advertisements: advertisements
                })
            });
        })
    }

    //定义一个columns属性，里面存放HTML代码
    columns = [
        {
            title: '编号',
            dataIndex: 'id',
            width:'60px'
        }, {
            title: '图片ID',
            dataIndex: 'photo_id',
        }, {
            title: '缩略图',
            dataIndex: 'photo.image',
            render: text => <img src={text}/>
        }, {
            title: '网站',
            dataIndex: 'name'
        }, {
            title: '网址',
            dataIndex: 'url',
        }, {
            title: '排序',
            dataIndex: 'sort',
        }, {
            title: '信息',
            dataIndex: 'desc',
        }, {
            title: '分类',
            dataIndex: 'advertisement_node.name',
            width:'110px',
        }, {
            title: '日期',
            dataIndex: 'created_at',
        }, {
            title: '操作',
            width:'110px',
            render: (text, record) => (
                <span>
                    <Link to={`/ad_list_edit/${record.id}`}>编辑</Link>

                    <Divider type="vertical"/>

                     <Popconfirm title="Are you sure delete this task?" onConfirm={() => this.delete(record)} okText="Yes" cancelText="No">
                     <a href="javascript:;">删除</a>
                     </Popconfirm>,
                </span>
            ),
        }
    ]

    //页面显示
    render() {

        const { getFieldDecorator } = this.props.form;

        const options = this.state.advertisement_nodes.map((item)=>{
            return <Option key={item.id} value={item.id}>{item.name}</Option>
        })

        return (
            <div>
                <Breadcrumb style={{marginBottom:'16px'}}>
                    <Breadcrumb.Item>广告列表</Breadcrumb.Item>
                </Breadcrumb>

                <Link to="/ad_list_new">
                    <Button type="primary">新增</Button>
                </Link>


                <Form style={{float:'right',marginTop:'-5px'}} layout="inline"  onSubmit={this.handleSubmit}>
                    <FormItem label="名称">
                        {getFieldDecorator('name')(<Input />)}

                    </FormItem>
                    <FormItem
                        label="分类">
                        {getFieldDecorator('advertisement_node_id')(
                            <Select placeholder="请选择分类"  style={{width:'220px'}}>
                                {options}
                            </Select>
                        )}

                    </FormItem>
                    <FormItem wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </FormItem>
                </Form>

                <Table rowKey="id" columns={this.columns} dataSource={this.state.advertisements}/>
            </div>
        )
    }
}

const WrappedApp = Form.create()(AdList);

export default WrappedApp;