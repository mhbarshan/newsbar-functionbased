import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import News from "./component/News";

const App = () => {
  const country = "in";
  const pageSize = 15;

  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <LoadingBar height={3} color="#00A36C" progress={progress} />
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"general"}
                pageSize={pageSize}
                country={country}
                category="general"
              />
            }
          />
          <Route
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"business"}
                pageSize={pageSize}
                country={country}
                category="business"
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"entertainment"}
                pageSize={pageSize}
                country={country}
                category="entertainment"
              />
            }
          />
          <Route
            path="/General"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"general"}
                pageSize={pageSize}
                country={country}
                category="general"
              />
            }
          />
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"health"}
                pageSize={pageSize}
                country={country}
                category="health"
              />
            }
          />
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"science"}
                pageSize={pageSize}
                country={country}
                category="science"
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"sports"}
                pageSize={pageSize}
                country={country}
                category="sports"
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"technology"}
                pageSize={pageSize}
                country={country}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
