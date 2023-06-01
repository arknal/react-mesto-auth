import {Route, Navigate} from "react-router-dom";

function ProtectedRoute({ children, ...props }) {
  return (
    <Route>
      {props.loggedIn ? children : <Navigate to='/sign-in' />}
    </Route>
  );
}

export default ProtectedRoute;
