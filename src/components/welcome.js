import React from 'react';
import {Link} from 'react-router';

export default function Welcome(props){

  return (
    <div className="col-md-6 col-md-offset-3">
      <center>
        <h3>Lucky you! You made it to a beta version of the site. You don't have to log in just yet!</h3><br/>
        <Link className="btn btn-primary" to={'/posts'}>Click Here to View Posts</Link>
      </center>
    </div>
  )
}
