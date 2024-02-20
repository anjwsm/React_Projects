import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import KeeperApp from './components/keeper-app/KeeperApp/KeeperApp.jsx'
import Carousel from './components/carousel/Carousel.jsx'
import data from './data/carouselData.json'
import Dropdown from './components/dropdown/Dropdown.jsx'
import data2 from './data/dropdownData.json'
import DigitalClock from './components/digital-clock/DigitalClock.jsx'
import Registration from './components/registration-form/Registration.jsx'
import BmiCalculator from './components/bmi-calculator/BmiCalculator.jsx'
import Calculator from './components/calculator/Calculator.jsx'
import CurrencyConverter from './components/currency-converter/CurrencyConverter.jsx'


const router = createBrowserRouter([ // array o fobject : {path, elemetn }
  {
    path: "/",
    element: <KeeperApp/>,
  },
  {
    path: "carousel",
    element: <Carousel data={data.slides}/>,
  },
  {
    path:"dropdown",
    element:<Dropdown data2={data2.dropdownItems}/>,
  },
  {
    path:"digitalclock",
    element: <DigitalClock/>
  },
  {
    path: "registrationform",
    element:<Registration/>
  },
  {
    path:"bmicalculator" ,
    element:<BmiCalculator/>
  } ,
  {
    path:"calculator" ,
    element:<Calculator/>
  },
  {
    path:"currencyconverter" ,
    element:<CurrencyConverter/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
