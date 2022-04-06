import request from '@/utils/request'

export function send_create(data) {
    return request({
        url:'/send/create',
        method:'post',
        data:data
    });
}

export function update(data) {
    return request({
        url:'/send/update',
        method:'post',
        data:data
    });
}

export function del(ids) {
    return request({
        url:'/send/delete',
        method:'get',
        params: {ids:ids}
    });
}

export function detail(id) {
    return request({
        url:'/send/detail',
        method:'get',
        params: {id:id}
    });
}


export function query(data) {
    return request({
        url:'/send/query',
        method:'post',
        data:data
    });
}

export function student_send(data) {
    return request({
        url:'/send/student_send',
        method:'post',
        data:data
    });
}