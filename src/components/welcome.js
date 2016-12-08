import React from 'react';
import {Link} from 'react-router';

export default function Welcome(props){

  return (
    <div>
      <center><Link className="btn btn-primary" to={'/posts'}>Click Here to View Posts</Link></center>
    </div>
  )
}
