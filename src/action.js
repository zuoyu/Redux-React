export const SET_POSTS ='SET_POSTS'

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


export function savePost(data){

  return dispatch =>{
    return fetch('http://localhost:4000/api/posts',{
      method:'post',
      body:data,
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(handleResponse);
  }
}

export function fetchPosts(){
  return dispatch=>{
    console.log("this.refs.myRef");
    fetch('http://localhost:4000/api/posts')
      .then(res => res.json())
      .then(data=> dispatch(setPosts(data.posts)));
  }
}
