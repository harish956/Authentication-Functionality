import {Route, Switch} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/about" component={About} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
