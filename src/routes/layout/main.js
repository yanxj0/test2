import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import RootSider from '../../components/layout/RootSider';
import RootBreadcrumb from '../../components/layout/RootBreadcrumb';

// import menus from '../../config/menuList';

export const RootSiderRoute = () =>
    <Route path="*" component={RootSider}/>
    
export const RootBreadcrumbRoute = () =>
    <Route path="*" component={RootBreadcrumb} />

export const ContentRoute = () => {
    // const list = menus.reduce((prev, item)=> prev.concat([...item.children]),[]);
    return (
    <Switch>
        <Route exact path='/' component={getComponent(()=>import('../home'))}/>
        {
            // list.map((item)=>(
            //     <Route path={itme.path} component={}/>
            // ))
        }
    </Switch>)
}
function getComponent(loader){
    return Loadable({loader:loader, loading:()=>null});
}