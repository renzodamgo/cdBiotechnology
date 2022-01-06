import React, { Component } from 'react'
import styles from '../styles/Navbar.module.scss'

export const Navbar = ()=>  {

    return (
        <nav>
            <div className={styles.container}>
                <img src="imgs/rtlogo.png" alt="Biotechnology Logo" />
                <ul id={styles.nav}>
                    <li><a href="">Quienes somos</a> </li>
                    <li><a href="">Productos</a> </li>
                    <li><a href="">Servicios</a> </li>
                    <li><a href="">Contáctenos</a> </li>
                </ul>
            </div>

        </nav>
        )

}


