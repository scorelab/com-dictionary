// App routes
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import HomePage from "./containers/home/home";
import SignUp from "./containers/signup/signup";
import AddWord from "./containers/addWord/addWord";
import LetterBased from "./containers/dictionary/letterDict";
// import Browse from "./containers/browse/browse";
// import Categories from "./containers/categories/categories";
// import Search from "./containers/search/search";

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignUp} />
      {/* <Route exact path="/browse" component={Browse} /> */}
      {/* <Route exact path="/search" component={Search} /> */}
      {/* <Route exact path="/Categories" component={Categories} /> */}
      <PrivateRoute path="/add">
        <AddWord />
      </PrivateRoute>
      <Route path="/letter" component={LetterBased} />
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
