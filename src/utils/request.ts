// 全局请求封装
import axios from "axios"

export default (url: string, method: any, params: Object) => {
    var baseURL = 'http://api.iiuct.cn/'
    return new Promise((resolve, reject) => {
        axios({
            url: baseURL + url,
            method: method,
            params: {
                ...params
            }
        }).then((res: { data: any }) => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        })
    })
}

