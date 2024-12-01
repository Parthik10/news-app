import React, { useState  , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import NavBar from './NavBar';
import News from './News';


const App = () => {
  const [progress, setProgress] = useState(0);

  const handleSetProgress = (progressValue) => {
    setProgress(progressValue);
  };

  useEffect(() => {
    document.title = `News-Mirror`;
  }, []);

  return (
    <div>
      <Router>
        <LoadingBar color="red" progress={progress} />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<News setProgress={handleSetProgress} key="home" country="in" category="business" />}
          />
          <Route
            path="entertainment"
            element={<News setProgress={handleSetProgress} key="entertainment" country="in" category="entertainment" />}
          />
          <Route
            path="general"
            element={<News setProgress={handleSetProgress} key="general" country="in" category="general" />}
          />
          <Route
            path="health"
            element={<News setProgress={handleSetProgress} key="health" country="in" category="health" />}
          />
          <Route
            path="science"
            element={<News setProgress={handleSetProgress} key="science" country="in" category="science" />}
          />
          <Route
            path="sports"
            element={<News setProgress={handleSetProgress} key="sports" country="in" category="sports" />}
          />
          <Route
            path="technology"
            element={<News setProgress={handleSetProgress} key="technology" country="in" category="technology" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
