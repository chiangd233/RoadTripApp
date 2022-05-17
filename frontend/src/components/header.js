import {NavLink} from 'react-router-dom'
import React from 'react';
import '../index.css';
import sedan from '../photos/sedan.png'



const Header = (props) => {
	return (
        <>
            <div class = 'container'>
                <div class = 'title'>
                    <img src = {sedan} alt = 'Pit Stop Icon' height = '100px' width = '100px' ></img>
                    <h1 class = 'logo'>PIT STOP</h1>
                </div>
                <div class = 'header'>
                    <div class = 'link'>
                        <NavLink to = '/user/register'> Sign Up </NavLink>
                    </div>
                    <div class = 'link'>
                        <NavLink to = '/user/login'> Sign In </NavLink>
                    </div>
                    <div class = 'link'>
                        <NavLink to = '/user/logout'> Logout </NavLink>
                    </div>
                </div>
                <div class = 'header'>
                    <div class = 'link'>
                        <NavLink to = '/'> Home </NavLink>
                    </div>
                    <div class = 'link'>
                        <NavLink to = '/create'> Add a Road Trip </NavLink>
                    </div>
                    <div class = 'link'>
                        <NavLink to = '/thingstodo'>  Explore Things to Do </NavLink>
                    </div>
                    <div class = 'link'>
                        <NavLink to = '/thingstodo'> Welcome  </NavLink>
                    </div>
                </div>
            </div>
            
        </>
	);
};

export default Header