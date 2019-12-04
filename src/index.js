import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/* ReactDom tar allt innehåller i appen 
och skickar vidare till id "root" element i index.html file*/ 

ReactDOM.render(<App />, document.getElementById('root'));

