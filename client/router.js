import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Loan Management App</h1>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          {/* Add other routes and components here */}
        </Switch>
      </div>
    </Router>
  );
};
