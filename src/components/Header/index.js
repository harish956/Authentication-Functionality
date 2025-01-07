// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="nav-header">
    <li className="nav-list-item">
      <Link to="/">Home</Link>
    </li>
    <li className="nav-list-item">
      <Link to="/about">About</Link>
    </li>
  </ul>
)
export default Header
