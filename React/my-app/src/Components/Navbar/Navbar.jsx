import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {useNavigate, Link} from 'react-router-dom'


const { Header, Content, Footer } = Layout;
const items = [
    {
        label: 'Home',
        key: '/home'
    },
    {
        label: 'About',
        key: '/about'
    },
    {
        label: 'Contact',
        key: '/contact'
    },
]



const AppNavbar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  let navigate = useNavigate()
  
  
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        {/* <Menu
        onClick={
            (data)=>{
               navigate(data.key)
            }
        }
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        /> */}
        <div style={{color:'white', display:'flex', gap:'20px'}}>
        <Link to={'/about'}><div>About</div></Link>
          <div>About</div>
          <div>Contact</div>
        </div>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
      
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default AppNavbar;