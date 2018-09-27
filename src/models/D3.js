import { getDemoData } from '../services/D3';
export default {
    namespace: 'D3',
    state: {
        columnchartData:[]
    },
    reducers: {
        upData(state, { payload }){
            return {...state, ...payload};
        }
    },
    effects: {
        *getData({ payload }, { put, call }) {
            const result = yield call(getDemoData, payload);
            yield put({
                type: 'upData',
                payload: { columnchartData: result }
            });
        }
    },
    subscriptions: {
        setup({ dispatch}){
            dispatch({
                type: "getData",
                payload: {
                    url: '/D3Data.json'
                }
            })
        }
    }
}