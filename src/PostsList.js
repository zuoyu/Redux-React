import React from 'react';
import PostListShow from './PostListShow';

export default function PostsList({ posts }){
  const emptyMessage = (
    <p>Can not find the collection</p>
  );

  const Message =(
    <div className="ui list">
      {posts.map(post => <PostListShow post={post} key={post._id} />)}
    </div>
  );

  return(
    <div>
    {posts.length === 0 ? emptyMessage : Message}
    </div>

  );
}

PostsList.propTypes={
  posts:React.PropTypes.array.isRequired
}
