import * as React from 'react';
import './style.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
      <Navbar title="TextUtils" abouttitle="New" />
      <br></br>
      <div className="container">
        <Textform title="Enter The Text" />
        <br></br>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      </div>
    </>
  );
}

export default App;
