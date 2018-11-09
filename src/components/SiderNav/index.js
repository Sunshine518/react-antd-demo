import React from 'react'
import CustomMenu from '../CustomMenu/index'


const menus = [
    {
        title: '首页',
        icon: 'home',
        key: '/home'
    },
    {
        title: '基本组件',
        icon: 'laptop',
        key: '/home/general',
        subs: [
            {key: '/home/general/button', title: '按钮', icon: 'picture'},
            {title: '图标', icon: 'picture', key: '/home/general/icon'}
        ]
    }, {
        title: '导航组件',
        icon: 'bars',
        key: '/home/navigation',
        subs: [
            {title: '下拉菜单', icon: 'calendar', key: '/home/navigation/drop_down'},
            {title: '导航菜单', icon: 'calendar', key: '/home/navigation/menu'},
            {title: '步骤条', icon: 'calendar', key: '/home/navigation/steps'}
        ]
    }, {
        title: '输入组件',
        icon: 'edit',
        key: '/home/entry',
        subs: [
            {
                title: '表单', icon: 'calendar', key: '/home/entry/form',
                subs: [
                    {title: '基础表单', icon: 'calendar', key: '/home/entry/form/basics_form'},
                    {title: '分步表单', icon: 'calendar', key: '/home/entry/form/steps_form'}
                ]
            },
            {title: '上传', icon: 'calendar', key: '/home/upload'}
        ]
    }, {
        title: '显示组件',
        icon: 'desktop',
        key: '/home/data_display',
        subs: [
            {title: '轮播图', icon: 'calendar', key: '/home/data_display/carousel'},
            {title: '折叠面板', icon: 'calendar', key: '/home/data_display/collapse'},
            {title: '列表', icon: 'calendar', key: '/home/data_display/list'},
            {title: '表格', icon: 'calendar', key: '/home/data_display/table'},
            {title: '标签页', icon: 'calendar', key: '/home/data_display/tabs'}
        ]
    }, {
        title: '反馈组件',
        icon: 'message',
        key: '/home/feedback',
        subs: [
            {title: '抽屉', icon: 'picture', key: '/home/feedback/drawer'},
            {title: '对话框', icon: 'picture', key: '/home/feedback/modal'},
            {title: '通知提醒框', icon: 'picture', key: '/home/feedback/notification'},
            {title: '加载中', icon: 'picture', key: '/home/feedback/spin'}
        ]
    }, {
        title: '其他组件',
        icon: 'bulb',
        key: '/home/other',
        subs: [
            {title: '动画', icon: 'picture', key: '/home/other/animation'},
            {title: '画廊', icon: 'picture', key: '/home/other/gallery'},
            {title: '富文本', icon: 'picture', key: '/home/other/draft'},
            {
                title: '图表', icon: 'picture', key: '/home/other/chart',
                subs: [
                    {title: 'echarts', icon: 'picture', key: '/home/other/chart/echarts'},
                    {title: 'recharts', icon: 'picture', key: '/home/other/chart/recharts'},
                ]
            },
            {title: '404', icon: 'picture', key: '/home/other/error'},
        ]
    }, {
        title: '表格实例',
        icon: 'table',
        key: '/home/table_case',
    },
    {
        title: '地图',
        icon: 'environment',
        key: '/home/map',

    }
]

class SiderNav extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.log}></div>
                <CustomMenu menus={menus}/>
            </div>
        )
    }
}

const styles = {
    log: {
        height: '31px',
        background: 'rgba(255, 255, 255, .2)',
        margin: '16px',
    }
}


export default SiderNav