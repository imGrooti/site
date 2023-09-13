import React from 'react';
import "../components/Nav.css";
import {BiHome} from 'react-icons/bi';
import {VscProject} from 'react-icons/vsc';
import {TbFileInfo} from 'react-icons/tb';
import {IoIosContact} from 'react-icons/io';
const Nav = () => {
  return (
    <div>
       
   <ul>
    
            
            <li><a href='/'><BiHome/> &nbsp; Home </a></li>
            <li><a href='/about'><TbFileInfo/>  &nbsp; INFO</a></li>
            <li><a href='/project'> <VscProject/>  &nbsp; Project</a></li>
            <li><a href='/contact'><IoIosContact/>  &nbsp; Contact</a></li>
            
        </ul>
       
        
    </div>
  )
}

export default Nav