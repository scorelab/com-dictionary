// App routes
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from "./containers/home/home";
import SignUp from "./containers/signup/signup";
import AddWord from "./containers/addWord/addWord";
import LetterBased from "./containers/dictionary/letterDict";
import Browse from "./containers/browse/browse";
import Categories from "./containers/categories/categories";
import CommentWord from "./containers/comment/comment";
import Report from "./containers/reportWord/reportWord";
import Search from "./containers/search/search";
import { useSelector } from "react-redux";
// import { auth } from "./config";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/browse" component={Browse} />
      <Route exact path="/search/:language/:keyword" component={Search} />
      <Route exact path="/Categories" component={Categories} />
      <PrivateRoute path="/add">
        <AddWord />
      </PrivateRoute>
      <Route exact path="/letter" component={LetterBased} />
      <Route exact path="/comment" component={CommentWord} />
      <Route exact path="/report" component={Report} />
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  const auth = useSelector((state) => state.firebase.auth); // isLoaded(auth) && !isEmpty(auth)
  console.log(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.uid ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
