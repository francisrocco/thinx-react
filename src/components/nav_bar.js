import React from 'react';
import {Link} from 'react-router';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="nav">
        <Link to={"/posts"}> THINX </Link> - <Link to={"/posts/new"}> ADD POST </Link>
      </div>
    )
}
}
