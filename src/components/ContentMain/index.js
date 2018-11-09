import React, {Component} from 'react';
import {Route, Redirect,Switch} from 'react-router-dom'    /*****当ajax请求返回状态如果成功则跳转成功页面 引用Redirect重定向****/

import Home from '../../routes/Home/Home'
import ButtonDemo from '../../routes/General/ButtonDemo/index'
import IconDemo from '../../routes/General/IconDemo/index'
import DropdownDemo from "../../routes/Navigation/DropdownDemo/index";
import MenuDemo from "../../routes/Navigation/MenuDemo/index";
import StepsDemo from "../../routes/Navigation/StepsDemo/index";
import CarouselDemo from "../../routes/DataDisplay/CarouselDemo/index";
import CollapseDemo from "../../routes/DataDisplay/CollapseDemo/index";
import ListDemo from "../../routes/DataDisplay/ListDemo/index";
import TableDemo from "../../routes/DataDisplay/TableDemo/index";
import TabsDemo from "../../routes/DataDisplay/TabsDemo/index";
import DrawerDemo from "../../routes/Feedback/DrawerDemo/index";
import ModalDemo from "../../routes/Feedback/ModalDemo/index";
import NotificationDemo from "../../routes/Feedback/NotificationDemo/index";
import SpinDemo from "../../routes/Feedback/SpinDemo/index";
import AnimationDemo from "../../routes/Other/AnimationDemo";
import GalleryDemo from "../../routes/Other/GalleryDemo";
import DraftDemo from "../../routes/Other/DraftDemo";
import EchartDemo from "../../routes/Other/ChartDemo/Echarts/index";
import RechartDemo from "../../routes/Other/ChartDemo/Recharts/index";
import ErrorPage from "../../routes/Other/ErrorPage";
import TableCase from '../../routes/TableCase/index'
import MapDemo from '../../routes/Map/index'
import LoginIndex from '../../routes/Login/index'
import BasicsForm from "../../routes/Entry/FormDemo/BasicsForm";
import StepsForm from "../../routes/Entry/FormDemo/StepsForm/index";


class ContentMain extends Component {
    render() {
        return (
            <div>
                <div style={{padding: 16, position: 'relative'}}>
                    <Switch>
                    <Redirect exact from='/' to='/home'/>
                    <Route exact path='/home' component={Home}/>

                    <Route path='/home/general/button' component={ButtonDemo}/>
                    <Route path='/home/general/icon' component={IconDemo}/>

                    <Route path='/home/navigation/drop_down' component={DropdownDemo}/>
                    <Route path='/home/navigation/menu' component={MenuDemo}/>
                    <Route path='/home/navigation/steps' component={StepsDemo}/>

                    <Route path='/home/entry/form/basics_form' component={BasicsForm}/>
                    <Route path='/home/entry/form/steps_form' component={StepsForm}/>

                    <Route path='/home/data_display/carousel' component={CarouselDemo}/>
                    <Route path='/home/data_display/collapse' component={CollapseDemo}/>
                    <Route path='/home/data_display/list' component={ListDemo}/>
                    <Route path='/home/data_display/table' component={TableDemo}/>
                    <Route path='/home/data_display/tabs' component={TabsDemo}/>

                    <Route path='/home/feedback/drawer' component={DrawerDemo}/>
                    <Route path='/home/feedback/modal' component={ModalDemo}/>
                    <Route path='/home/feedback/notification' component={NotificationDemo}/>
                    <Route path='/home/feedback/spin' component={SpinDemo}/>

                    <Route path='/home/other/animation' component={AnimationDemo}/>
                    <Route path='/home/other/gallery' component={GalleryDemo}/>
                    <Route path='/home/other/draft' component={DraftDemo}/>
                    <Route path='/home/other/chart/echarts' component={EchartDemo}/>
                    <Route path='/home/other/chart/recharts' component={RechartDemo}/>
                    <Route path='/home/other/error' component={ErrorPage}/>

                    <Route path='/home/table_case' component={TableCase}/>
                    <Route path='/home/map' component={MapDemo}/>


                    <Route path='/login' component={LoginIndex}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default ContentMain