/**
 * This is the main app file where I link together the header and the main pages
 */

import React, {Component} from 'react';


import Header from './header/header';

//temporary needed by material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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