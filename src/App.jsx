import { Route, Routes } from 'react-router-dom'
import './index.css'
import Auth from './pages/Auth'
import AuthContianer from './features/Authorization/AuthContianer'

function App() {
  return (
<Routes>
  <Route path='/' element={<AuthContianer/>}>

  </Route>
</Routes>
  )
}

export default App
