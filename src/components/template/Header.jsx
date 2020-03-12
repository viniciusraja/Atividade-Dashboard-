import './Header.css';
import React from 'react';

import { FiMenu } from "react-icons/fi";
import { FaImage } from "react-icons/fa";

export default props =>

    <header className="header d-none d-sm-flex align-items-flex-center justify-content-flex-start">
            <div className="menuButton d-flex">
                <FiMenu className="icon d-flex " size="35px"/>
            </div>
         <FaImage className="icon d-flex" size="45px"/>
    </header>        


