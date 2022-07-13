import React from 'react';

function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='text-center'>
        <h1 className='mb-4'><span className='text-danger'>404</span> Page Not Found</h1>
        <h3>
          <a href="#">Return Home</a>
        </h3>
      </div>
    </div>
  );
}

export default NotFound;
