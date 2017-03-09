import React from 'react';

export default function PostListShow({ post }) {
  return(
    <a className="item">
    <i className="right triangle icon"></i>
    <div className="content">
      <div className="header">Title: {post.title}</div>
      <div className="description">Contant: {post.contant}</div>
    </div>
  </a>
  )
}
