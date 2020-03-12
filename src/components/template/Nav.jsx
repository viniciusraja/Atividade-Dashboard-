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
        
        <div className="navButton">
        <a href="#/" className="menuItems">
            <MdSearch className="icon" size="20px"/>
            
        </a>
        </div>
        
        <div className="navButton">
        <a href="#/" className="menuItems">
            <GiHouse className="icon" size="20px"/>

        </a>
        </div>
        
        <div className="navButton">
        <a href="#/" className="menuItems">
            <AiFillProject className="icon" size="20px"/>

        </a>
        </div>
        
        <div className="navButton">
        <a href="#/" className="menuItems">
            <AiOutlineAreaChart className="icon" size="20px"/>

        </a>
        </div>
        
        <div className="navButton">
        <a href="#/" className="menuItems">
            <TiUpload className="icon" size="20px"/>

        </a>
        </div>
        
        <div className="navButton">
        <a href="#/" className="menuItems">
            <FaFileImage className="icon" size="20px"/>

        </a>
        </div>
        
        <div className="navButton">
        <a href="#/" className="menuItems">
            <IoIosCalendar className="icon" size="20px"/>

        </a>
        </div>
        
        <div className="navButton">
        <a href="#/" className="menuItems">
            <MdGroup className="icon" size="20px"/>

        </a>
        </div>
        
        <div className="navButton">
        <a href="#/" className="menuItems">
            <AiFillSetting className="icon" size="20px"/>

        </a>
        </div>
    
        </nav> 
    </aside>


