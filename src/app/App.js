import React from 'react';
import { Layout, Menu, Icon} from 'antd';
import ProfileMenu from './widget/profileMenu';
import Dashboard from './router/dashboard';
import ButtonUI from './router/ui-component/button';
import PaginationUI from './router/ui-component/pagination';
import CardUI from './router/ui-component/card';
import ProgressUI from './router/ui-component/progress';
import {
  CustomizedValidation,
  WrappedRegistrationForm,
  WrappedTimeRelatedForm
} from './router/form-component'

import { Router, Route, Switch } from 'react-router';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class app extends React.Component {
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
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ background: '#fff' }}
        >
          <div className="logo logo-block">
            <h4>Reactro</h4>
          </div>

          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item className="menu-title-block">
              <h3 className="menu-title">Dashboard</h3>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="crown" />
              <span>Dashboard</span>
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>User</span></span>}
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="10">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div className="hdr-cmn-blck dsbrd-btn-block">
              <i className="la la-bars trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
              ></i>
            </div>
            <div className="hdr-cmn-blck search-block">
              <form role="search" action="">
                  <div className="search-control">
                      <input type="search" id="site-search" name="q"
                          placeholder="Search here..."
                          />
                      <button>
                        <i className="la la-search"></i>
                      </button>
                  </div>
              </form>
            </div>
            <div className="hdr-cmn-blck profile-block">
              <ProfileMenu/>
            </div> 
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <WrappedTimeRelatedForm/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default app;
