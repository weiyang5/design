import request from '@/utils/request'



export function channel_tree(data) {
    return request({
        url:'/front/channel/tree',
        method:'post',
        data:data
    });
}



export function channel_detail(id) {
    return request({
        url:'/front/channel/detail',
        method:'get',
        params: {id:id}
    });
}

export function article_detail(id) {
    return request({
        url:'/front/article/detail',
        method:'get',
        params: {id:id}
    });
}


export function article_query(data) {
    return request({
        url:'/front/article/query',
        method:'post',
        data:data
    });
}


export function hot() {
    return request({
        url:'/front/article/hot',
        method:'get',
    });
}



export function post_query(data) {
    return request({
        url:'/front/post/query',
        method:'post',
        data:data
    });
}




export function student_create(data) {
    return request({
        url:'/front/reg/student_create',
        method:'post',
        data:data
    });
}

export function company_create(data) {
    return request({
        url:'/front/reg/company_create',
        method:'post',
        data:data
    });
}