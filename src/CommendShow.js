import React from 'react';
import { Link } from 'react-router';

export default function CommendShow({ commends }) {
  console.log(commends);

  return(
    <div className="item">
    <h3>Below is comment</h3>
      {commends.map(function(commend,i){
        return (<div className="content"><div className="header">Comment {i+1} : {commend.commend}</div></div>)
      })}
    </div>
  )
}
