import request from '@/utils/request'

export function create(data) {
    return request({
        url:'/experience/create',
        method:'post',
        data:data
    });
}

export function update(data) {
    return request({
        url:'/experience/update',
        method:'post',
        data:data
    });
}

export function del(ids) {
    return request({
        url:'/experience/delete',
        method:'get',
        params: {ids:ids}
    });
}

export function detail(id) {
    return request({
        url:'/experience/detail',
        method:'get',
        params: {id:id}
    });
}


export function query(data) {
    return request({
        url:'/experience/query',
        method:'post',
        data:data
    });
}