export const SET_POSTS ='SET_POSTS'

export function setPosts(posts){
  return{
    type:SET_POSTS,
    posts
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
