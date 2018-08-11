import React from 'react';
import ProTypes from 'prop-types';
import { Switch, Route, routerRedux } from 'dva/router'
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import home from './components/layout/main';

const { ConnectedRouter } = routerRedux

export default function Routers({ history }) {
    return (
        <LocaleProvider locale={zhCN}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path={'/'} component={home}/>
                </Switch>
            </ConnectedRouter>
        </LocaleProvider>
    )
}

Routers.ProTypes = {
    history: ProTypes.object,
    app: ProTypes.object,
}