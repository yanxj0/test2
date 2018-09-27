import axios from 'axios';
import lodash from 'lodash';

// 配置 axios 请求头和请求体，允许携带 cookie 发起请求
const axios_config = {
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type' : 'application/json'
    },
    withCredentials: true,
    timeout: 5000
};

function getHost() {
    // let host = localStorage.getItem("host");
    // if (!host) {
    //     axios.get(window.location.href.split("#")[0]+"config.json").then(res => {
    //         const data = res.data;
    //         console.log(data);
    //         if (data.host) {
    //             host = data.host;
    //             localStorage.setItem("host", host);
    //         } else {
    //             alert("请联系管理员配置ip地址");
    //             host = "";
    //         }
    //     }).catch(error => {
    //         host = "";
    //         alert("请刷新页面");
    //         console.log(error);
    //     });
    //     console.log(host);
    // }
    return 'http://localhost:8090/testdata';
}

const fetchData = (options) => {
    let {
        method = 'get', // 创建请求时使用的方法，默认为 get
        data, // 传入请求参数
        // fetchType,
        url,
    } = options;

    // 对数据进行深拷贝，防止使用过程中对数据进行修改
    const cloneData = lodash.cloneDeep(data);

    console.log(getHost());

    url = getHost() + url;

   console.log('url:' + url);
    const axioscopy = axios.create(axios_config);

    // 根据请求类型，进行请求
    switch (method.toLowerCase()) {
        case 'get':
            console.log('request get');
            console.log(cloneData);
            return axioscopy.get(url, cloneData);
        case 'post':
            console.log('request post');
            console.log(cloneData);
            return axioscopy.post(url, cloneData);
        case 'delete':
            return axioscopy.delete(url, {
                data: cloneData,
            });
        case 'put':
            console.log('request put');
            console.log(cloneData);
            return axioscopy.put(url, cloneData)
        case 'patch':
            return axioscopy.patch(url, cloneData)
        default:
            return axioscopy(options);
    }
}

export function request (options) {
    console.log('request action');
    console.log(options);

    return fetchData(options).then((response) => {
        console.log('axios call back')
        console.log(response);
        // 对请求返回结果进行解析
        let { data }  = response;
        if (data.code === 1) {
            // 请求成功，且正确返回数据，直接返回需要的结果
            return Promise.resolve({
                code: data.code,
                success: true,
                message: data.message,
                ...data
            });
        } else if (data.code === -1) {
            // 请求成功，但是返回数据有情况
            console.log("请求有问题");
            return Promise.reject({
                code: data.code,
                success: false,
                errorMessage: data.message,
            });
        }
    }).catch((error) => {
        console.log('axios call back error');
        console.log(error);
        return Promise.resolve({
            success: false,
            errorMessage: error
        });
    })
}