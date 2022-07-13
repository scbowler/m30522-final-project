import React from 'react';

function Card(props) {
  const { entry } = props;
  return (
    <div className='col-md-6 col-xl-3'>
      <div className="card">
        <img src={entry.photoUrl} alt={entry.title} className='card-img-top' />
        <div className="card-body">
          <p className="card-text">{entry.notes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
