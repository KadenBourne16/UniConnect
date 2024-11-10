import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginActivity from './Activities/loginActivity.jsx'
import DashBoardActivity from './Activities/dashBoardActivity.jsx'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<LoginActivity/>}/>
          <Route path='/dashboard/*' element={<DashBoardActivity/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
