import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome'
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new'


export default (
  <Route path="/" component={ App } >
    <IndexRoute component={ Welcome } />
    <Route path="/posts" component={ PostsIndex }>
      <Route path="/posts/new" component={ PostNew } />
    </Route>
  </Route>
)
