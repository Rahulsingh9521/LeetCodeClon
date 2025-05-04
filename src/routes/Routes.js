import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Login from '../pjt/pages/loginPage';

const Routers = () => {
    return(
    <Router>
        <Routes>
            <Route path ='/'  element ={<App/>}/>
            <Route path ='/login'  element ={<Login/>}/>
        </Routes>
    </Router>
    )
}

export default Routers;