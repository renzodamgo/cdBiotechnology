import React, { Component } from 'react'
import styles from '../../styles/Navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = ()=>  {

    return (
        <nav>
            <div id="desktop">
            <div className={styles.container}>
                <img src="imgs/rtlogo.png" alt="Biotechnology Logo" />

                <ul id={styles.nav}>

                        <li><a href="">Quienes somos</a> </li>
                        <li><a href="">Productos</a> </li>
                        <li><a href="">Servicios</a> </li>
                        <li><a href="">Contáctenos</a> </li>


                </ul>
        </div>
            </div>

            <div id="mobile">
                <div className={styles.container}>
                    <img src="imgs/rtlogo.png" alt="Biotechnology Logo" />

                    <ul id={styles.nav}>

                        <li><a href=""><FontAwesomeIcon icon={faBars} size='lg'/></a> </li>
                        {/* <li><a href="">Productos</a> </li>
                        <li><a href="">Servicios</a> </li>
                        <li><a href="">Contáctenos</a> </li> */}


                    </ul>
                </div>
            </div>

        </nav>
        )

}


