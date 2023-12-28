import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import {Link, Outlet} from "react-router-dom";

const { Header, Sider, Content } = Layout;


const ContainerDefault : React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {                                                             //
        token: { colorBgContainer, borderRadiusLG },    // не знаю що за хук
    } = theme.useToken();                                               //

    return (
        <>
            <Layout style={{height:"100%"}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: <Link to={"/"}>Головна</Link>,
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label:  <Link to={"/create"}>Додати категорію</Link>,
                            }

                        ]}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}

export default ContainerDefault;