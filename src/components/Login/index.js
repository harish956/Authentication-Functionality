import Cookies from 'js-cookie'
import {withRouter, Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const onClickLogin = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    Cookies.set('jwt_token', data.jwt_token, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLogin} style={{cursor: 'pointer'}}>
        Login with sample creds
      </button>
    </div>
  )
}
export default withRouter(Login)
