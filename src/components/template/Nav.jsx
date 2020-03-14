import React from 'react';

import { MdSearch } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { AiOutlineAreaChart } from "react-icons/ai";
import { TiUpload } from "react-icons/ti";
import { FaFileImage } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";

import './Nav.css';

export default props =>
    <aside className="menu-area d-flex align-items-flex-start justify-content-center">

       <nav className="menu d-flex flex-column justify-content-around ">
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <MdSearch className="icon" size="23px"/>
            
        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <GiHouse className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <AiFillProject className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <AiOutlineAreaChart className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <TiUpload className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <FaFileImage className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <IoIosCalendar className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <MdGroup className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <AiFillSetting className="icon" size="23px"/>

        </div>
        </a>
    
        </nav> 
    </aside>


