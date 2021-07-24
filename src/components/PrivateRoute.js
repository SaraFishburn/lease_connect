import {
  Route,
  Redirect
} from 'react-router-dom'

export default function PrivateRoute({ children, ...props }) {
  return localStorage.getItem('authToken') ? <Route {...props}>{children}</Route> : <Redirect to='/login' />
}
