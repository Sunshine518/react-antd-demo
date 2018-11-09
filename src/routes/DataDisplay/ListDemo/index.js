import React, {Component} from 'react'
import Breadcrumb from '../../../components/Breadcrumb/index'
import {List, Radio, Card, Switch, Avatar, Icon, Button, Spin} from 'antd';
import axios from 'axios'


/*******竖排列表显示字段定义为空，push传入列表****/
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

/*******竖排列表星星评论****/
const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);


class ListDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 'default',
            bordered: true,
            loading: false,    //页面打开时加载效果状态
            loadingMore: false,   //点击加载按钮时加载效果状态
            moreDate: []
        }
    }

    getDate2 = () => {
        this.setState({
            loadingMore: true,
        })
        axios.get('https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo').then(res => {
            // console.log(res.data.results)
            this.setState({
                moreDate: this.state.moreDate.concat(res.data.results),
                loadingMore: false
            })
        })
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        this.getDate2()
        this.setState({
            loading: false
        })
    }

    render() {
        const {size, bordered, loading, moreDate, loadingMore} = this.state;
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
        //定义loadMore里面有两个元素，Spin加载效果及加载按钮
        const loadMore = (
            <div style={styles.loadMore}>
                <Spin style={loadingMore ? {} : {display: 'none'}}/>
                <Button style={!loadingMore ? {} : {display: 'none'}} onClick={() => this.getDate2()}>加载更多</Button>
            </div>
        )
        return (
            <div>
                <Breadcrumb arr={['显示', '列表']}/>
                <Card bordered={false} title='何时使用'>最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。</Card>
                <Card bordered={false} style={{marginTop: 14}} title='基本用法'>
                    <div style={{marginBottom: 14}}>
                        <Radio.Group onChange={(e) => this.setState({size: e.target.value})} value={size}>
                            <Radio.Button value='small'>Small</Radio.Button>
                            <Radio.Button value='default'>Default</Radio.Button>
                            <Radio.Button value='large'>Large</Radio.Button>
                        </Radio.Group>
                        &emsp;&emsp;&emsp;&emsp;  <span> 是否显示边框</span>&emsp;<Switch defaultChecked
                                                                                    onChange={checked => this.setState({bordered: checked})}/>
                    </div>

                    <List
                        size={size}
                        bordered
                        style={bordered ? styles.haveBorder : styles.noBorder}
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </Card>

                <Card bordered={false} style={{marginTop: 14}} title='竖排列表样式'>
                    <List
                        style={{width: '80%'}}
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                        dataSource={listData}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[<IconText type="star-o" text="156"/>, <IconText type="like-o" text="156"/>,
                                    <IconText type="message" text="2"/>]}
                                extra={<img width={272} alt="logo"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar}/>}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />,
                </Card>

                <Card bordered={false} style={{marginTop: 14}} title='加载更多'>
                    <List
                        style={{width:'80%'}}
                        loading={loading}
                        dataSource={moreDate}
                        loadMore={loadMore}
                        renderItem={item => (
                            <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                                <List.Item.Meta
                                    avatar={<Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                    title={<a href="https://ant.design">{item.name.last}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        )
    }
}

const styles = {
    haveBorder: {
        minHeight: 270,
        width: '80%',
        boxSizing: 'border-box'
    },
    noBorder: {
        minHeight: 270,
        width: '80%',
        padding: '0 24px',
        boxSizing: 'border-box',
        border: '1px solid #fff'
    },
    loadMore: {
        height: 32,
        marginTop: 16,
        lineHeight: '32px',
        textAlign: 'center',
    },
}

export default ListDemo