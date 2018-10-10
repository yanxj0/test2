// import { request } from '../../utils/request';
// import * as d3 from 'd3';

export function getDemoData(params){
    // return request({
    //     url: params.url,
    //     method: 'get',
    //     data: {}
    // })

    // return d3.json(`http://localhost:8090/testdata${params.url}`, function(data){
    //     return Promise.resolve(data);
    // })

    return [
        {"name": "Apple", "value": 20},
        {"name": "Banana", "value": 24},
        {"name": "Orange", "value": 12},
        {"name": "Pears", "value": 18},
        {"name": "Litchi", "value": 8},
        {"name": "Peach", "value": 12},
        {"name": "Tomato", "value": 17}];
}