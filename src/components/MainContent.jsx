import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Single from './Single';
import Multi from './Multi';
import Admin from './Admin';

const MainContent = () => {
return (
    <div className="flex-1 p-4">
      <Switch>
        <Route exact path="/" component={Single} />
        <Route exact  path="/multi" component={Multi} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};

export default MainContent;
