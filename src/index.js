import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MediaCard from './MediaCard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <MediaCard title="Adil Altaf" body={<p><strong>My</strong> picture</p>} imageURL='./AdilAltaf.jpg' altText="Image of Adil Altaf" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
