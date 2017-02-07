import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './header.css'

class Header extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <nav>
                    <h1 className={styles.mainHeader}>This is the application header</h1>

                    <RaisedButton
                        label="Super Secret Password"
                        secondary={true}
                    />
                </nav>

            </MuiThemeProvider>
        )
    }
}


export default Header;