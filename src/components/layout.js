import React from 'react'
import {Container, Grid} from 'semantic-ui-react'
import Navbar from './Navbar'
import Footer from './footer';

import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss' 
import 'semantic-ui-css/semantic.css';

const Layout = (props) => {
    return (
        <Container text>
            <div>
                <Navbar />
                {props.children}
            </div>

            
            <Footer />
        </Container>
    )
}
/**
 *         <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>

            </div>
        </div>
 */
export default Layout