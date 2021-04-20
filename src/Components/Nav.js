import React, { Fragment } from 'react' ;
import { BrowserRouter as Router, Link } from 'react-router-dom' ;

const Nav = () => {

    return (
        <Fragment>
            <nav style={{paddingTop: 20}}>
                <Link style={{margin: 20, fontSize: '1.5em'}} to="/">HOME</Link>
                <Link style={{margin: 20, fontSize: '1.5em'}} to="/medition">MEDITIONS</Link>
            </nav>
        </Fragment>
    ) ;
} ;

export default Nav ;
