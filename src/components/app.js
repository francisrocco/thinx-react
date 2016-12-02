import React from 'react';
import NavBar from './nav_bar'

export default (props) => {
    return (
      <div>
        <div className='container'>
          <NavBar title="NavBar" url="/" />
          { props.children }
        </div>
      </div>
    )
};
