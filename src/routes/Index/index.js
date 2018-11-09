import React,{component} from 'react';
import {Layout,Icon} from 'antd';
import { BrowserRouter as Router} from 'react-router-dom';
import HeaderBar from '../../components/HeaderBar'
import SiderNav from '../../components/SiderNav/index'
import ContentMain from '../../components/ContentMain/index'
import './style.css'

const {Header, Content, Sider} = Layout;

class routersIndex extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Sider trigger={null}
                           style={{height:'100vh'}}
                           collapsible
                           collapsed={this.state.collapsed}>
                       <SiderNav/>
                    </Sider>

                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <div style={{float:'right'}}>
                            <HeaderBar/>
                            </div>
                        </Header>
                        <Content style={{height:'100vh-64vh'}}>
                            <ContentMain/>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default routersIndex;