
import NewHouse from '../components/house/NewHouse';
import LoginForm from '../components/login/LoginForm';
import ImageUpload from '../components/image/ImageUpload';
import NewUser from '../components/user/NewUser';

export default function Test() {
  return (
    <header>
      <h1>Lease Connect</h1>
      <ImageUpload />
      <LoginForm />
      <NewUser/>
      <NewHouse />
    </header>
  )
}