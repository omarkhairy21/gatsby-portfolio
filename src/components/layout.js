import React from 'react'
import {Container} from 'semantic-ui-react'
import Navbar from './Navbar'
import Footer from './footer';
import '../styles/index.scss'
//import layoutStyles from '../styles/layout.module.scss' 
import 'semantic-ui-css/semantic.css';

const Layout = (props) => {
    return (
            <div className="holdBorder">
                <Container text>
                <Navbar />
                {props.children}
                <div className="push" style={{height:'10vh'}}></div> 
                <Footer/>
                </Container>
                {/* style={{flexGrow: '1'}} 
                 <div className='content' ></div>
                 <div className='footer' ></div>
                {/* style={{ flexShrink: '0'}} */}
            </div>
            
    )
}
/**
 *         <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>

            </div>
        </div>
 */
export default Layout