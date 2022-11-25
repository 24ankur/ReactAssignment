export function getBlog() {
    console.log('called');
    return dispatch => {
        return dispatch({
            type: 'GET_BLOG'
        });
    }
};

export function addBlog(data) {
    return dispatch => {
        return dispatch({
            type: 'ADD_BLOG',
            payload: data
        });
    }
};

export function editBlog(data) {
    return dispatch => {
        return dispatch({
            type: 'EDIT_BLOG',
            payload: data
        });
    }
};

export function deleteBlog(blogId) {
    return dispatch => {
        return dispatch({
            type: 'DELETE_BLOG',
            payload: blogId
        });
    }
};