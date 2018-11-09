import React from 'react';
import {Card, Row, Col, Icon,Timeline,Carousel} from 'antd'
import './style.css'
import EchartsProjects from './EchartsProjects'

import avatar1 from './img/avatar1.jpg'
import avatar2 from './img/avatar2.jpg'
import avatar3 from './img/avatar3.jpg'
import avatar4 from './img/avatar4.jpg'
import home1 from './img/home1.jpg'
import home2 from './img/home2.jpg'
import home3 from './img/home3.jpg'
import home4 from './img/home4.jpg'

class Home extends React.Component {
    render() {
        return (
            <div>

                <Row gutter={10}>
                    <Col span={4}>
                        <Card bordered={false} style={{marginTop: 14}}>
                                <div className="Box">
                                    <div className='left-box'>
                                        <Icon type="heart" className="icon-size heart-color"/>
                                    </div>
                                    <div className='right-box'>
                                        <div>收藏</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                        </Card>
                        <Card bordered={false} style={{marginTop: 14}}>
                            <div className="Box">
                                <div className='left-box'>
                                    <Icon type="cloud" className="icon-size cloud-color"/>
                                </div>
                                <div className='right-box'>
                                    <div>云数据</div>
                                    <h2>301021</h2>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false} style={{marginTop: 14}}>
                            <div className="Box">
                                <div className='left-box'>
                                    <Icon type="camera" className="icon-size camera-color"/>
                                </div>
                                <div className='right-box'>
                                    <div>照片</div>
                                    <h2>802</h2>
                                </div>
                            </div>
                        </Card>
                        <Card bordered={false} style={{marginTop: 14}}>
                            <div className="Box">
                                <div className='left-box'>
                                    <Icon type="mail" className="icon-size mail-color"/>
                                </div>
                                <div className='right-box'>
                                    <div>邮件</div>
                                    <h2>101</h2>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={16}  style={{marginTop:14}}>
                        <Card className='no-padding' bordered={false} >
                            <EchartsProjects/>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={10}>
                    <Col span={8}>
                        <Card style={{marginTop:14}} bordered={false}>
                            <div>
                                <h3>任务</h3>
                                <small>10个已经完成，2个待完成，1个正在进行中</small>
                            </div>
                            <span style={{position:'absolute',top:24,right:14}}><Icon type="sync" /></span>
                            <Timeline  style={{marginTop:14}}>
                                <Timeline.Item color="green">新版本迭代会</Timeline.Item>
                                <Timeline.Item color="green">完成网站设计初版</Timeline.Item>
                                <Timeline.Item color="red">
                                    <p>联调接口</p>
                                    <p>功能验收</p>
                                </Timeline.Item>
                                <Timeline.Item color="#108ee9">
                                    <p>登录功能设计</p>
                                    <p>权限验证</p>
                                    <p>页面排版</p>
                                </Timeline.Item>
                            </Timeline>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{marginTop:14}} bordered={false}>
                            <div>
                                <h3>消息栏</h3>
                                <span style={{position:'absolute',top:24,right:14}}><Icon type='sync'/></span>
                            </div>
                            <div className='box massage-box'>
                                <div className='avatar'>
                                    <img className='avatar-img' src={avatar1} alt=""/>
                                </div>
                                <div className='info-box'>
                                    <span className="name">樱桃小丸子</span>
                                    <span className='info'>梦想要伟大，欲望要克制</span>
                                </div>
                            </div>
                            <div className='box massage-box'>
                                <div className='avatar'>
                                    <img className='avatar-img' src={avatar4} alt=""/>
                                </div>
                                <div className='info-box'>
                                    <span className="name">樱桃小丸子</span>
                                    <span className='info'>梦想要伟大，欲望要克制</span>
                                </div>
                            </div>
                            <div className='box massage-box'>
                                <div className='avatar'>
                                    <img className='avatar-img' src={avatar2} alt=""/>
                                </div>
                                <div className='info-box'>
                                    <span className="name">樱桃小丸子</span>
                                    <span className='info'>梦想要伟大，欲望要克制</span>
                                </div>
                            </div>
                            <div className='box massage-box'>
                                <div className='avatar'>
                                    <img className='avatar-img' src={avatar3} alt=""/>
                                </div>
                                <div className='info-box'>
                                    <span className="name">樱桃小丸子</span>
                                    <span className='info'>梦想要伟大，欲望要克制</span>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={8} style={{marginTop:14}}>
                            <Carousel autoplay arrows className='img-size' >
                                <div><img src={home1} alt="" className='img-size'/></div>
                                <div><img src={home2} alt="" className='img-size'/></div>
                                <div><img src={home3} alt="" className='img-size'/></div>
                                <div><img src={home4} alt="" className='img-size'/></div>
                            </Carousel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
