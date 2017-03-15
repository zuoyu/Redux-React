import React from 'react';
import DetailShow from './DetailShow';
import CommendShow from './CommendShow';


export default function DetailsList({ details }){

  //when frontend can't find the data return the details information
  const emptyMessage = (
    <p>Can not find the collection</p>
  );
  //when find the data return the details information
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
  details:React.PropTypes.object.isRequired
}
