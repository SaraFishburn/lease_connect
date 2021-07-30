import UpdateAccount from '../../components/user/UpdateAccount'
import UpdatePassword from '../../components/user/UpdatePassword'
import './styles.scss'

const UpdateAccountPage = (props) => {

  return (
    <div className="my-account-page">
      <UpdateAccount user={props}/>
      <UpdatePassword />
    </div>
  )
}

export default UpdateAccountPage
