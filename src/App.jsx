import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import {Routes as AppRoutes} from './routes';

import './App.css'
import { Views } from './views';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="inscription" element={<Views.RegisterView/>}/>
        <Route path="connexion" element={<Views.LoginView/>}/>
        <Route path="*" element={<AppRoutes.MainRoutes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
