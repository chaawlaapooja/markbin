import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import App from '/imports/ui/App'
import BinsList from '/imports/ui/bins/BinsList'
import BinsMain from '/imports/ui/bins/BinsMain'

import { Bins } from '/imports/api/bins'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={BinsList}/>
    	<Route path="/bins/:binId" component={BinsMain}/>
    </Route>
  </Router>
);

Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));
});
