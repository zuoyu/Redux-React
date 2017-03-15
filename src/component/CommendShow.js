import React from 'react';
import { Link } from 'react-router';

export default function CommendShow({ commends }) {
  //show the comment and display in the list 
  return(
    <div className="item">
    <h3>Below is comment</h3>
      {commends.map(function(commend,i){
        return (<div className="content"><div className="header">Comment {i+1} : {commend.commend}</div><br/></div>)
      })}
    </div>
  )
}
