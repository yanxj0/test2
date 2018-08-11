import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';

const RootBreadcrumb = ({match}) => {
    const urlArr = match.url.split('/');
    const home = '首页';
    return (
        <Breadcrumb style={{ margin: '12px 0'}}>
            {
                urlArr[0] === urlArr[1] && <Breadcrumb.Item>{home}</Breadcrumb.Item>
            }
        </Breadcrumb>
    )
}

RootBreadcrumb.propTypes = {
    match: PropTypes.object,
  }

export default RootBreadcrumb