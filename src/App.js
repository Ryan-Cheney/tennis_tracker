import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addServe } from './actions';
import ServeList from './ServeList';
import ServeStats from './ServeStats';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const serves = useSelector(state => state.serves);

  const recordServe = serveResult => {
    dispatch(addServe(serveResult));

    // Add blink effect
    const className = serveResult === 'IN' ? 'blink-green' : 'blink-red';
    document.body.classList.add(className);
    setTimeout(() => {
      document.body.classList.remove(className);
    }, 1000);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link className="nav-link" to="/">Record Serve</Link>
          <Link className="nav-link" to="/stats">View Stats</Link>
        </nav>
        <header>Serve Tracker</header>
        <div className="container">
          <Routes>
            <Route path="/" element={
              <div>
                <button className="button in-btn" onClick={() => recordServe('IN')}>Serve In</button>
                <button className="button out-btn" onClick={() => recordServe('OUT')}>Serve Out</button>
                <ServeList serves={serves} />
              </div>
            } />
            <Route path="/stats" element={<ServeStats serves={serves} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
