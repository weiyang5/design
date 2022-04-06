import request from '@/utils/request'

export function create(data) {
    return request({
        url:'/intention/create',
        method:'post',
        data:data
    });
}

export function update(data) {
    return request({
        url:'/intention/update',
        method:'post',
        data:data
    });
}

export function del(ids) {
    return request({
        url:'/intention/delete',
        method:'get',
        params: {ids:ids}
    });
}

export function detail(id) {
    return request({
        url:'/intention/detail',
        method:'get',
        params: {id:id}
    });
}


export function query(data) {
    return request({
        url:'/intention/query',
        method:'post',
        data:data
    });
}