import React from 'react';
import ReactDOM from 'react-dom/client';
//import AppClass from './AppClass';
//import HelloWorld from './Hello';
import App from "./App.js"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row' >
        <div className='col'>
          <App msg="State Using functional component!"/>
          </div>
      </div>
    </div>
  </React.StrictMode>
);
