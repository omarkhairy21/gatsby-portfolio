import React from 'react';
import WhoAmI from '../components/WhoAmI';
import WhatAmIUsing from '../components/WhatAmIUsing';
import Resume from '../components/resume';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import {Divider} from 'semantic-ui-react'

/**
 * button
 * font-size: 1rem;
    border-style: groove;
    border-color: #2196F3;
    background-color: transparent;
 */
const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About"/>
            <WhoAmI />
            <WhatAmIUsing />
            <Divider horizontal clearing>Or Download</Divider>
            <Resume />    
        </Layout>   
    );
}

const br ={
    margin: '5vh auto',
    boxSizing: 'border-box',
    height: '0.5rem',
    width: '8rem',
    backgroundColor: '#03a9f4',
    marginBottom: '10vh'
}
const imageStyle={
    width: '150px', 
    height:'150px'
} 


export default AboutPage;