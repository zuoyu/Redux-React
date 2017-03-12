

export const SET_POSTS ='SET_POSTS'
export const ADD_POST ='ADD_POST'
export const POST_DELETED = 'POST_DELETED'

export function setPosts(posts){
  return{
    type:SET_POSTS,
    posts
  }
}

export function handleResponse(response){
  if(response.ok){
    return response;
  }else{
    let error = new Error(response);
    console.log(response);
    error.response = response;
    throw error;
  }
}

export function addPost(post){
  return {
    type: ADD_POST,
    post
  }
}

export function postDeleted(postId){
  return{
    type:POST_DELETED,
    postId
  }
}


export function savePost(data,newdata){
  console.log(data);
  return dispatch =>{
    return fetch('http://localhost:4000/api/posts',{
      method:'post',
      body:data,
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(handleResponse)
    .then(data => dispatch(addPost(newdata)));
  }
}

export function deletePost(id){

  return dispatch =>{
    console.log("_id="+id)
    return fetch('http://localhost:4000/api/posts',{
      method:'delete',
      body:"id="+id,
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(handleResponse)
    .then(data => dispatch(postDeleted(id)));
  }
}

export function fetchPosts(){
  return dispatch=>{
    //console.log("this.refs.myRef");
    fetch('http://localhost:4000/api/posts')
      .then(res => res.json())
      .then(data=> dispatch(setPosts(data.posts)));
  }
}

export function fetchPostsDetails(id){
  return dispatch=>{
    //console.log("this.refs.myRef");
    fetch('http://localhost:4000/api/postdetails?id='+id)
      .then(res => res.json())
      .then(data=> console.log(data));
  }

}
