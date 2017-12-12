import React from 'react';
import PropTypes from 'prop-types';
import Seasons from './seasons/seasons';


const App = (state) => {
  return(
  <div >
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <Seasons />
  </div>)
}


App.propTypes ={
  state:PropTypes.object.isRequired
}




export default App;