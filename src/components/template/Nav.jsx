import React from 'react';

import { MdSearch } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { AiOutlineAreaChart } from "react-icons/ai";
import { TiUpload } from "react-icons/ti";
import { FaFileImage } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";


import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { HamburgerButton } from "react-hamburger-button";


import './Nav.css';

export default class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.state = { open: false };
    }
  
    handleClick() {
      this.setState({
        open: !this.state.open
      });
    }
  
    render() {
  
  return(

    <aside className="menu-area d-flex align-items-center justify-content-start">
         <div 
        
        className={this.state.open?"active menuButton m-0 p-0 d-flex justify-content-center align-items-center":"menuButton m-0 p-0 d-flex justify-content-center align-items-center "}
        onClick={this.handleClick.bind(this)}
        >
       <HamburgerButton
        open={this.state.open}
        
        width={25}
        height={25}
        strokeWidth={2.5}
        color={this.state.open?"#e1696a":"#999"}
        animationDuration={0.5}
      />
       </div>
      <div className='my-dropdown-slidedown d-flex'>
       <SlideDown >{this.state.open ?
        <>
        <div className="backgroundNav">
        </div>
       <nav className="menu flex-column justify-content-around ">
        <a href="#/1" className="menuItems">
        <div className="navButton">
            <MdSearch className="icon" size="23px"/>
            <span>Search</span>
        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <GiHouse className="icon" size="23px"/>
            <span>Home</span>
        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <AiFillProject className="icon" size="23px"/>
            <span>Datasheet</span>
        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <AiOutlineAreaChart className="icon" size="23px"/>
            <span>Stats</span>
        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <TiUpload className="icon" size="23px"/>
            <span>Upload</span>
        </div>
        </a>

        <a href="#/" className="menuItems">
        <div className="navButton">
            <FaFileImage className="icon" size="23px"/>
            <span>Images</span>
        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <IoIosCalendar className="icon" size="23px"/>
            <span>Schedule</span>
        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <MdGroup className="icon" size="23px"/>
            <span>User</span>
        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <AiOutlineSetting className="icon" size="23px"/>
            <span>Settings</span>
        </div>
        </a>
    
        </nav> 
        </>
    : null}</SlideDown>
    </div>
    </aside>

  )}}

