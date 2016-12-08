import React from 'react';
import {Link} from 'react-router';

export default function Welcome(props){

  return (
    <div>
      <Link className="btn btn-success" to={'/posts'}>Click Here to View Posts</Link>
    </div>
  )
}
