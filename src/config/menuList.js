const menus = [{
    key: 'D3js',
    type: 'user',
    title: 'D3js',
    children: [{
        key: 'd3-columnchart',
        title: '柱状图',
        link: '/d3/columnchart',
        path: '/d3/columnchart',
        loader: () =>
            import ('../routes/D3/columnchart')
    }]
}]

export default menus