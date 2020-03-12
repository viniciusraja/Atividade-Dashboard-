import React from 'react';

import './Footer.css';
import { FaCopyright } from "react-icons/fa";



export default props =>

    <footer className="footer text-muted">
        <span className="d-flex ">
            <FaCopyright className="icon" size="15px" color="black"/> 
            <h6 className="text-muted">Your Company Details</h6>
        </span>
    </footer>        


