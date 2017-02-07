import React, { Component } from 'react';
import styles from './header.css'

class Header extends Component {
    render() {
        return (
            <nav>
                <h1 className={styles.mainHeader}>This is the application header</h1>
            </nav>
        )
    }
}


export default Header;