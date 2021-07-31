import LoginForm from '../../components/login/LoginForm'
import './styles.scss'

function LoginPage(props) {
  return (
    <div className='login-page'>
      <img src="https://res.cloudinary.com/sazza/image/upload/v1627021393/lease_connect_large_yrwpks.svg" alt="lease connect logo" />
      <LoginForm setUser={props.setUser} setHouse={props.setHouse} setUserData={props.setUserData} setRole={props.setRole}/>
    </div>
  )
}

export default LoginPage
