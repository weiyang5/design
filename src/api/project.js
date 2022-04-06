import request from '@/utils/request'

export function create(data) {
    return request({
        url:'/project/create',
        method:'post',
        data:data
    });
}

export function update(data) {
    return request({
        url:'/project/update',
        method:'post',
        data:data
    });
}

export function del(ids) {
    return request({
        url:'/project/delete',
        method:'get',
        params: {ids:ids}
    });
}

export function detail(id) {
    return request({
        url:'/project/detail',
        method:'get',
        params: {id:id}
    });
}


export function query(data) {
    return request({
        url:'/project/query',
        method:'post',
        data:data
    });
}