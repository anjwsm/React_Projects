import './App.css'
import Carousel from './components/carousel/Carousel'
import data from "./data/carouselData.json";
import Dropdown from './components/dropdown/Dropdown';
import {dropdownItems} from './data/dropdownData.json';
import Header from './components/keeper-app/header/Header';
import  Footer from './components/keeper-app/footer/Footer';
import  CreateArea from './components/keeper-app/create-area/CreateArea';
import  Note  from './components/keeper-app/note/Note';
import  {useEffect, useState } from 'react';

import KeeperApp from './components/keeper-app/KeeperApp/KeeperApp';
function App() {

  

  return <>
    {/* <Carousel data = {data.slides} autoplayInterval={2000} /> */}
    {/*<Dropdown  data2 = {dropdownItems}/>*/}
    {/* <KeeperApp/> */}

   
   

  </>
   
}

export default App
