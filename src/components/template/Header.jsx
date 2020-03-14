import './Header.css';
import React from 'react';

import { FiMenu } from "react-icons/fi";
import { FaImage } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

export default props =>

    <header className="header d-flex align-items-flex-center justify-content-flex-start">
           
            <FaImage className="icon d-none d-sm-none d-md-flex p-2 ml-2" size="45px" color="#DDD"/>
            <div className="user d-none d-sm-flex ml-auto p-2 align-items-center">
              <span className="d-flex flex-column align-items-end justify-content-center">
              <h4 className="text-uppercase">Renee Mckelvey</h4> 
              <p className="text-muted">Account Settings</p> 
              </span>
              <div className="iconUser d-flex align-items-center justify-content-center ml-3">
               <FaUserAlt size="17px" color="#DDD"/>
              </div>
            </div>
    </header>        


