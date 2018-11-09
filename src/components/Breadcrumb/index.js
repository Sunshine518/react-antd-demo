import React from 'react'
import { Breadcrumb } from 'antd';
import {Link} from 'react-router-dom'

//React函数组件，它接收一个单一的“props”对象并返回了一个React元素
const Breadcrumbs=(props)=>(
    <Breadcrumb style={{marginBottom:16}}>
        <Breadcrumb.Item><Link to='/home'>首页</Link></Breadcrumb.Item>
        {/*{console.log(props)}*/}
        {props.arr && props.arr.map((item)=>{
            if ((typeof item)==='object'){
                return  <Breadcrumb.Item key={item.title}><Link to={item}>{item.title}</Link></Breadcrumb.Item>
            }else {
                return  <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            }
        })}
    </Breadcrumb>
)


export default Breadcrumbs