import Login from './Components/Login'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import HomepgUser from './Components/HomepgUser'
import HomepgAd from './Components/HomepgAd'
import Profile from './Components/Profile'
import Feedback from './Components/Feedback'
import Plans from './Components/Plans'
import RechargeForm from './Components/RechargeForm'
import Contact from './Components/Contact'
import Addplan from './Components/Addplan'
import Delplan from './Components/Delplan'
import Rechargehis from './Components/Rechargehis'
import Adminprof from './Components/Adminprof'
import Allplans from './Components/Allplans'
import Addplanaddon from './Components/Addplanaddon'
import Updateplans from './Components/Updateplans'
import Rechargeformadd from './Components/Rechargeformadd'
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/homepgad" element={<HomepgAd/>}></Route>
        <Route path="/homepguser" element={<HomepgUser/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/plans" element={<Plans/>}></Route>
        <Route path="/recharge/:planId" element={<RechargeForm/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/addplan" element={<Addplan/>}></Route>
        <Route path="/delplan" element={<Delplan/>}></Route>
        <Route path="/rehis" element={<Rechargehis/>}></Route>
        <Route path="/adminprof" element={<Adminprof/>}></Route>
        <Route path="/allplans" element={<Allplans/>}></Route>
        <Route path="/addplanaddon" element={<Addplanaddon/>}></Route>
        <Route path="/updateplans/:planId"  element={<Updateplans/>}></Route>
        <Route path="/rechargeplanaddon/:addonId"  element={<Rechargeformadd/>}></Route>

        
        

      </Routes>
      </Router>
    </div>
  )
}

export default App