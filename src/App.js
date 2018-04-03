import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
const { Sider, Header, Content, Footer } = Layout;
class App extends React.Component {
    render() {
        return (React.createElement(Router, null,
            React.createElement(Layout, null,
                React.createElement(Sider, { style: { overflow: 'auto', height: '100vh', position: 'fixed', left: 0 } },
                    React.createElement(Menu, { theme: "light", mode: "inline", defaultSelectedKeys: ['1'] },
                        React.createElement(Menu.Item, { key: "1" },
                            React.createElement(Link, { to: '/' },
                                React.createElement(Icon, { type: "dashboard" }),
                                React.createElement("span", { className: "nav-text" }, "Dashboard"))),
                        React.createElement(Menu.Item, { key: "2" },
                            React.createElement(NavLink, { to: '/orders' },
                                React.createElement(Icon, { type: "table" }),
                                React.createElement("span", { className: "nav-text" }, "Orders"))))),
                React.createElement(Layout, { style: { marginLeft: 200 } },
                    React.createElement(Content, { style: { margin: '24px 16px 0', overflow: 'initial' } },
                        React.createElement(Header, { style: { background: '#fff', padding: 0 } }),
                        React.createElement(Switch, null,
                            React.createElement(Route, { exact: true, path: "/", component: Dashboard }),
                            React.createElement(Route, { path: '/orders', component: Orders })),
                        React.createElement(Footer, { style: { textAlign: 'center' } }, "Dashboard \u00A92018 Created by Changsheng Wu"))))));
    }
    ;
}
export default App;
//# sourceMappingURL=App.js.map