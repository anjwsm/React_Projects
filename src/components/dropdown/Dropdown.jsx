import { useState , useEffect, useRef } from 'react';
import './Dropdown.css';

const Dropdown = ({data2}) => {
    const[open , setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(()=>{
    let handler = (e) =>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }
    };
    document.addEventListener('click', handler);

    return  ()=>document.removeEventListener('click',handler);
  },[]);
    return (
        <div className='dropdown'>
        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src='../src/assets/dropdown-images/blackgirl.png'></img>

          </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
           <h3>The Anjali <br/><span>Website Designer</span></h3>
            <ul>
              {data2.map((item)=>{
                return (
                   <li key={item.id}>
                       <img src={item.src} />
                       <a>{item.text}</a>
                    </li>
                )
              
            })}
            </ul>

          </div>

       </div>

        </div>
    )
}

export default Dropdown ;