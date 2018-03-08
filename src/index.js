import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import 'react-bootstrap/dist/react-bootstrap';

import App from './App';
import './index.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

// const App = () => (
//     <MuiThemeProvider>
//         <MyAwesomeReactComponent />
//     </MuiThemeProvider>
// );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
