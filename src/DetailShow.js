import React from 'react';
import { Link } from 'react-router';

export default function PostListShow({ details }) {
  return(
    <div className="item">
    <i className="right triangle icon"></i>
    <div className="content">
      <h2><div className="header">Title: {details.main_post.title}</div>
      <div className="description">Contant: {details.main_post.contant}</div></h2>
    </div>

    </div>
  )
}
