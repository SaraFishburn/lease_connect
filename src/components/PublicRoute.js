// allows a user to access a route only if they're not logged in (e.g login page)

import { Route, Redirect } from 'react-router-dom'

export default function PublicRoute({ children, ...props }) {
  return localStorage.getItem('authToken') ? <Redirect to='/'/>  :  <Route {...props}>{children}</Route>
}