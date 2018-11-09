import React from 'react'
import {Card} from 'antd'
import ReactQMap from 'react-qmap';

const getContianer = dom => {
    const middleControl = document.createElement('div');
    middleControl.style.cssText = 'width: 22px;height: 30px;position: absolute;left: 50%;top: 50%;z-index: 999;margin-left: -23px;margin-top: -23px;';
    middleControl.innerHTML = `<img src="${require('./img/spot_location.png')}" style="width: 100%;height: 100%;" />`;
    dom.appendChild(middleControl);
}

class MapDemo extends React.Component {
    render() {
        return (
            <div>
                <Card bordered={false} title='何时使用'>此页面用到的地图是<a href="https://php.ctolib.com/article/wiki/79440"
                                                                target='_blank'>react-qmap -- React腾讯地图组件</a></Card>

                <Card bordered={false}>
                    <ReactQMap
                        center={{latitude: 30.5170563937, longitude: 114.1371345520}}
                        initialOptions={{zoomControl: true, mapTypeControl: true}}
                        apiKey="Y46BZ-Y333U-JR2VO-2MGKD-MOZMJ-2SFVN"   //设置地图引用的key,为防止限制调用API,自己申请
                        style={{height: 500}}    // 高度和宽度默认占父元素的100%
                        mySpot={{latitude: 30.53786, longitude: 104.07265}}    //设置地图的定位坐标
                        getContainer={getContianer}    //获取地图的html dom元素的函数，
                    />
                </Card>
            </div>
        )
    }
}

export default MapDemo