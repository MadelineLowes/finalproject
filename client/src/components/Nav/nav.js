import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';



// style={styles.links}
export default function Nav() {
    return (
        <div bg_image>


        
        <header class="header">
            <div class="header__content ">
                <h1 class="logo">Partner for Good.</h1>
                {/* <nav class="navbar navbar-expand navbar-dark "> */}
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <NavLink to='/' class="link nav__link"> Who we are.</NavLink>
                        </li>
                        <li class="nav__item">
                            <NavLink to='/addCause' class="link nav__link"> Add your cause</NavLink>
                        </li>
                        <li class="nav__item">
                            <NavLink to='/login' class="link nav__link"> Login</NavLink>
                        </li>
                    </ul>
                    {/* <div class="container d-flex justify-content-between">
                <h1 class="col-4 border">Partner for Good.</h1>
                <div class="container d-flex justify-content-evenly col-6" >
                    <NavLink to='/' class="link"> Who we are.</NavLink>
                    <NavLink to='/addCause' class="link"> Add your cause</NavLink>
                    <NavLink to='/login' class="link"> Login</NavLink>
                </div>
            </div> */}
                </nav>
            </div>
        </header>
        <body>

        </body>

        </div>
    )
}