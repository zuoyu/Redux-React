import React from 'react';
import { Link } from 'react-router';

export default function PostListShow({ post, deletePost }) {
  return(
    <div className="item">
    <i className="right triangle icon"></i>
    <div className="content">
      <div className="header">Title: {post.title}</div>
      <div className="description">Contant: {post.contant}</div>
    </div>
    <div>
      <Link to={`/posts/${post._id}`} className="ui basic button green">Detail</Link>
      <div className="ui basic button red" onClick={()=> deletePost(post._id)}>Delete</div>
    </div>
    </div>
  )
}
