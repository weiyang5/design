import request from '@/utils/request'

export function create(data) {
    return request({
        url:'/certificate/create',
        method:'post',
        data:data
    });
}

export function update(data) {
    return request({
        url:'/certificate/update',
        method:'post',
        data:data
    });
}

export function del(ids) {
    return request({
        url:'/certificate/delete',
        method:'get',
        params: {ids:ids}
    });
}

export function detail(id) {
    return request({
        url:'/certificate/detail',
        method:'get',
        params: {id:id}
    });
}


export function query(data) {
    return request({
        url:'/certificate/query',
        method:'post',
        data:data
    });
}