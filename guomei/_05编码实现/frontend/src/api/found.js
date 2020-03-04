import request from '../util/request'
const requestUrl=url=>url

//发现圈子
export function getFindData(){
    const url=requestUrl('/gome/getFindData')
    return request.get(url)
}