import request from '@/utils/request'

export function create(data) {
    return request({
        url:'/company/create',
        method:'post',
        data:data
    });
}

export function update(data) {
    return request({
        url:'/company/update',
        method:'post',
        data:data
    });
}

export function del(ids) {
    return request({
        url:'/company/delete',
        method:'get',
        params: {ids:ids}
    });
}

export function detail(id) {
    return request({
        url:'/company/detail',
        method:'get',
        params: {id:id}
    });
}


export function query(data) {
    return request({
        url:'/company/query',
        method:'post',
        data:data
    });
}


export function companyInfo() {
    return request({
        url:'/company/info',
        method:'get',
    });
}