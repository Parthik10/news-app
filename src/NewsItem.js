// import React from 'react';

const NewsItem = ({ title, description, imgUrl, newsUrl, author, date, source }) => {
  return (
    <>
      <div className='container my-3'>
        <div className="card" style={{ width: '18rem' }}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="container card-body ">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-black'>By {!author ? "Unknown" : author} on <br /> {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm " style={{ backgroundColor: 'black', color: 'white' }}>read more</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;


import React from 'react';

function NewsItem(props) {
  const { title, description, imgUrl, newsUrl, author, date, source } = props;
  
  return (
    <div className='container my-3'>
      <div className="card" style={{ width: '18rem' }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {source}
        </span>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="container card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className='card-text'><small className='text-black'>By {!author ? "Unknown" : author} on <br /> {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm " style={{ backgroundColor: 'black', color: 'white' }}>read more</a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
