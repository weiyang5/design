import request from '@/utils/request'



export function channel_tree(data) {
    return request({
        url:'/f/channel/tree',
        method:'post',
        data:data
    });
}



export function channel_detail(id) {
    return request({
        url:'/f/channel/detail',
        method:'get',
        params: {id:id}
    });
}

export function article_detail(id) {
    return request({
        url:'/f/article/detail',
        method:'get',
        params: {id:id}
    });
}


export function article_query(data) {
    return request({
        url:'/f/article/query',
        method:'post',
        data:data
    });
}


export function hot() {
    return request({
        url:'/f/article/hot',
        method:'get',
    });
}



export function post_query(data) {
    return request({
        url:'/f/post/query',
        method:'post',
        data:data
    });
}




export function student_create(data) {
    return request({
        url:'/f/reg/student_create',
        method:'post',
        data:data
    });
}

export function company_create(data) {
    return request({
        url:'/f/reg/company_create',
        method:'post',
        data:data
    });
}