import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-black" aria-label="Ninth navbar example">
        <div className="container-xl">
          <Link className="navbar-brand" to="/">NEWS-MIRROR</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-info" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
