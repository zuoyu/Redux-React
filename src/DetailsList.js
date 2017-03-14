import React from 'react';
import DetailShow from './DetailShow';
import CommendShow from './CommendShow';


export default function DetailsList({ details }){
  /*const emptyMessage = (
    <p>Can not find the collection</p>
  );
  cons

  const Message =(
    <div className="ui list">
      {posts.map(post => <PostListShow post={post} key={post._id} deletePost={deletePost} />)}
    </div>
  );*/
  //console.log(commends)
  //this.props.fetchCommends(this.props.params._id);
  //console.log(details.commendss)

  const emptyMessage = (
    <p>Can not find the collection</p>
  );

  const Message =(
    <div className="ui list">
       <DetailShow details={details} />
       <br/>
       <CommendShow commends = {details.commendss} />
    </div>
  );

  return(
    <div>
      {details.length === 0 ? emptyMessage : Message}

    </div>

  );


}

DetailsList.propTypes={
  details:React.PropTypes.object.isRequired,
  //commends:React.PropTypes.array.isRequired
}
