import Login from './Components/Login'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import HomepgUser from './Components/HomepgUser'
import HomepgAd from './Components/HomepgAd'
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/homepgad" element={<HomepgAd/>}></Route>
        <Route path="/homepguser" element={<HomepgUser/>}></Route>

      </Routes>
      </Router>
    </div>
  )
}

export default App