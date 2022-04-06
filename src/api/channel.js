import request from '@/utils/request'

export function create(data) {
    return request({
        url:'/channel/create',
        method:'post',
        data:data
    });
}

export function update(data) {
    return request({
        url:'/channel/update',
        method:'post',
        data:data
    });
}

export function del(ids) {
    return request({
        url:'/channel/delete',
        method:'get',
        params: {ids:ids}
    });
}

export function detail(id) {
    return request({
        url:'/channel/detail',
        method:'get',
        params: {id:id}
    });
}


export function query(data) {
    return request({
        url:'/channel/query',
        method:'post',
        data:data
    });
}


export function tree() {
    return request({
        url:'/channel/tree',
        method:'get',
    });
}