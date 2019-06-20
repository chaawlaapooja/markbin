import React from 'react';
import Header from './Header.jsx';

const App = (props) => (
  <div>
    <Header/>
    {props.children}
  </div>
);

export default App;
