import React, { Component } from 'react';
import { Layout } from 'antd'
import RootHeader from './RootHeader';
import { RootSiderRoute, RootBreadcrumbRoute, ContentRoute } from '../../routes/layout/main'

const { Footer, Content, Sider} = Layout;

class Home extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh'}}>
        <RootHeader />
        <Layout style={{paddingTop:'64px'}}>
          <Sider width={200} 
            style={{ background: '#fff' }}
            className="fixed">
            <RootSiderRoute />
          </Sider>
          <Layout className="content-max">
            <RootBreadcrumbRoute/>
            <Content style={{ background: '#fff', padding: 12, margin: 0, minHeight: 280 }}>
              <ContentRoute {...this.props}/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <a href="https://ant.design">Ant Design</a>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
