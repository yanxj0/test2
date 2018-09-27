import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route } from 'dva/router'
import RootSider from '../../components/layout/RootSider';
import RootBreadcrumb from '../../components/layout/RootBreadcrumb';

import menus from '../../config/menuList';

export const RootSiderRoute = () =>
    <Route path="*" component={RootSider}/>
    
export const RootBreadcrumbRoute = () =>
    <Route path="*" component={RootBreadcrumb} />

export const ContentRoute = (props) => {
    const list = menus.reduce((prev, item)=> prev.concat([...item.children]),[]);
    return (
    <Switch>
        <Route exact path='/' component={getComponent(()=>import('../home'))}/>
        {
            list.map((item)=>(
                <Route key={item.path} path={`${item.path}`} component={getComponent(item.loader)}/>
            ))
        }
    </Switch>)
}
function getComponent(loader){
    return Loadable({loader:loader, loading:()=>null});
}