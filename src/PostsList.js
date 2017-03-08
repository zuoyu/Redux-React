import React from 'react';

export default function PostsList({ posts }){
  const emptyMessage = (
    <p>Can not find the collection</p>
  );

  const Message =(
    <p>the posts list</p>
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
