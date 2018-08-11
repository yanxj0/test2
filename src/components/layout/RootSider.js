import React from 'react';
import PropTypes from 'prop-types';
import { Menu,Icon } from 'antd';
import { Link } from 'react-router-dom';

import menus from '../../config/menuList';

const { SubMenu } = Menu;

const RootSider = ({match}) => (
    <Menu mode="inline"
          theme="dark"
          defaultSelectedKeys={[match.url]}
          selectedKeys={[match.url]}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}>
          <Menu.Item key="/">
            <Link to="/">
                <Icon type="home" />
                <span>首页</span>
            </Link>
          </Menu.Item>
          {
            menus.map((item)=>{
              return(
              <SubMenu
                key={item.key}
                title={<span><Icon type={item.type}/>
                  <span className="nav-text">{item.title}</span></span>}>
                  {
                    item.children && item.children.map((subItem)=>(
                      <Menu.Item key={subItem.key}>
                        {subItem.title}
                      </Menu.Item>))
                  }
                </SubMenu>)
            })
          }
    </Menu>
);

RootSider.propTypes = {
    match: PropTypes.object.isRequired,
}

export default RootSider