import request from '@/utils/request'

export function create(data) {
    return request({
        url:'/train/create',
        method:'post',
        data:data
    });
}

export function update(data) {
    return request({
        url:'/train/update',
        method:'post',
        data:data
    });
}

export function del(ids) {
    return request({
        url:'/train/delete',
        method:'get',
        params: {ids:ids}
    });
}

export function detail(id) {
    return request({
        url:'/train/detail',
        method:'get',
        params: {id:id}
    });
}


export function query(data) {
    return request({
        url:'/train/query',
        method:'post',
        data:data
    });
}