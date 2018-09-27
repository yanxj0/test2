// import { request } from '../../utils/request';
import * as d3 from 'd3';

export function getDemoData(params){
    // return request({
    //     url: params.url,
    //     method: 'get',
    //     data: {}
    // })

    return d3.json(`http://localhost:8090/testdata${params.url}`, function(data){
        return Promise.resolve(data);
    })
}