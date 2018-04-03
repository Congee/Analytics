import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { HashRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Orders/Orders';
import WebAnalytics from './components/WebAnalytics/WebAnalytics';

const { Sider, Content, Footer } = Layout;

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Router>
        <Layout>

          <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, backgroundColor: '#f0f2f5' }}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to='/'>
                  <Icon type="dashboard" />
                  <span className="nav-text">Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to='/Orders'>
                  <Icon type="table" />
                  <span className="nav-text">Orders</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to='/WebAnalytics'>
                  <Icon type="area-chart" />
                  <span className="nav-text">WebAnalytics</span>
                </NavLink>
              </Menu.Item>
            </Menu>
            <Footer style={{ textAlign: 'center' }}>
              Dashboard © 2018
            </Footer>
          </Sider>

          <Layout style={{ marginLeft: 200, position: 'fixed' }}>
            <Content style={{ marginLeft: '3px', overflow: 'initial' }}>
              <Switch>
                <Route exact path="/" component={ WebAnalytics } />
                <Route path='/Orders' component={ Orders } />
                <Route path='/WebAnalytics' component={ Dashboard } />
              </Switch>
            </Content>
          </Layout>

        </Layout>
      </Router>

    );
  };
}

import { hot } from 'react-hot-loader';
export default hot(module)(App);
