import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb/index'
import {Card,Carousel } from 'antd'
import './style.css'

class CarouselDemo extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb arr={['显示', '轮播图']}></Breadcrumb>
                <Card bordered={false} title='何时使用'>
                    <ol>
                        <li>当有一组平级的内容。</li>
                        <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</li>
                        <li>常用于一组图片或卡片轮播。</li>
                    </ol>
                </Card>
                <Card title='基本用法' bordered={false} style={{marginTop:14}}>
                    <Carousel arrows autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>,
                </Card>
            </div>
        )
    }
}

export default CarouselDemo