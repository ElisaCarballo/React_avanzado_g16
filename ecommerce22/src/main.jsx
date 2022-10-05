import React from 'react'
import ReactDOM from 'react-dom/client'
import  {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import '../src/assets/css/index.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import App from './App'
import Products from './pages/Products'
// import BannerMain from './assets/imgs/BannerMain.jpg'
// import './assets/img.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path='/home' element={<App/>} />
        <Route path='/product/:id' element={<Products/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='*' element={<h3>Error 404</h3>} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
)
// return (
//   <div>
//   <img src={BannerMain} className="ImgHeader"/>
//     </div>
// )

