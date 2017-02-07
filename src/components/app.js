/**
 * This is the main app file where I link together the header and the main pages
 */

import React, {Component} from 'react';
import Header from './header/header';

export default class App extends Component{

    render(){
        return (
            <div>
                <Header/>
                {/* And now display all the pages loaded by router below */}
                {this.props.children}
            </div>
        )
    }
}