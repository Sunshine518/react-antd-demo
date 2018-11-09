import React, {Component} from 'react';
import {Form, Breadcrumb, notification, Select, Input, Button,Upload,Icon,message } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'

const FormItem = Form.Item;
const Option = Select.Option;

//图片上传显示
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

//图片上传之前的条件
function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class AdListEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            advertisement_nodes: [],
            imageUrl:"",
            loading: false,
        }
    }

    componentDidMount() {
        const id=this.props.match.params.id
        axios.get(`https://movie.lc1017.com/api/admin/v1/advertisements/${id}/edit`).then(res=>{
               const advertisement=res.data.data.advertisement
               const advertisement_node=res.data.data.advertisement_node
               const photo=res.data.data.photo.image
            this.setState({
                imageUrl:photo
            })
            this.props.form.setFieldsValue({
                photo_id: advertisement.photo_id,
                name: advertisement.name,
                url:advertisement.url,
                sort:advertisement.sort,
                desc:advertisement.desc,
                advertisement_node_id:advertisement.advertisement_node_id
            })
        })

        axios.get(`https://movie.lc1017.com/api/admin/v1/advertisement_nodes`).then(res => {
            this.setState({
                advertisement_nodes: res.data.data
            })
        })
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {

            //设置photo_id
            this.props.form.setFieldsValue({
                photo_id: info.file.response.data.photo_id
            })
            // console.log(info.file.response)


            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.put(`https://movie.lc1017.com/api/admin/v1/advertisements/${this.props.match.params.id}`, values).then(res => {
                    this.openNotificationWithIcon('success')
                    this.props.history.push("/ad_list");
                })
                // console.log('Received values of form: ', values);
            }
        });
    }

    openNotificationWithIcon = (type) => {
        notification[type]({
            message: '编辑成功',
            description: '返回首页.',
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        /**分类循环读取数据定义options*/
        const options = this.state.advertisement_nodes.map((item)=>{
           return <Option key={item.id} value={item.id}>{item.name}</Option>
        })

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;


        return (
            <div>
                <Breadcrumb style={{margin: '0 0 40px 0'}}>
                    <Breadcrumb.Item><Link to={`/ad_list`}>广告列表</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>编辑</Breadcrumb.Item>
                </Breadcrumb>

                <Form onSubmit={this.handleSubmit}>

                    <FormItem
                        label="广告名称"
                        labelCol={{span: 2}}
                        wrapperCol={{span: 10}}>
                        {getFieldDecorator('name', {
                            rules: [{required: true, message: '请输入广告名称'}],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem
                        label="缩略图"
                        labelCol={{span: 2}}
                        wrapperCol={{span: 10}}>
                        {getFieldDecorator('photo_id')(
                            <Input hidden/>
                        )}
                        <Upload
                        name="image"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://movie.lc1017.com/api/admin/v1/upload"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}>
                        {imageUrl ? <img src={imageUrl} alt="image" style={{maxWidth:'128px'}} /> : uploadButton}
                    </Upload>
                    </FormItem>


                    <FormItem
                        label="分类"
                        labelCol={{span: 2}}
                        wrapperCol={{span: 5}}>
                        {getFieldDecorator('advertisement_node_id')(
                            <Select placeholder="请选择分类">
                                {options}
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        label="网址"
                        labelCol={{span: 2}}
                        wrapperCol={{span: 10}}>
                        {getFieldDecorator('url')(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem
                        label="排序"
                        labelCol={{span: 2}}
                        wrapperCol={{span: 10}}>
                        {getFieldDecorator('sort')(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem
                        label="信息"
                        labelCol={{span: 2}}
                        wrapperCol={{span: 10}}>
                        {getFieldDecorator('desc')(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem wrapperCol={{span: 10, offset: 2}}>
                        <Button type="primary" htmlType="submit">
                            编辑
                        </Button>
                    </FormItem>

                </Form>
            </div>
        );
    }
}

const WrappedSitesNew = Form.create()(AdListEdit);
export default WrappedSitesNew;