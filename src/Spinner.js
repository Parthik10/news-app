import React from 'react';
import loading from './loading.gif';

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img className='img-thumbnail' src={loading} alt='loading' style={{height:'50px', width:'50px'}}></img>
    </div>
  );
};

export default Spinner;
