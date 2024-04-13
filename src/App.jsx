import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import {Routes as AppRoutes} from './routes';

import './App.css'
import { Views } from './views';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="mobile-home" element={<Views.MobileHomeView/>}/>
        <Route path="mobile-choice" element={<Views.MobileChoiceView/>}/>
        <Route path="inscription" element={<Views.RegisterView/>}/>
        <Route path="connexion" element={<Views.LoginView/>}/>
        <Route path="activation" element={<Views.ActivationView/>}/>
        <Route path="*" element={<AppRoutes.MainRoutes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
