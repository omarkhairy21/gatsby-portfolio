import React from 'react';
import WhoAmI from '../components/WhoAmI';
import WhatAmIUsing from '../components/WhatAmIUsing';

import ReachMe from '../components/ReachMe';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import {Divider, Header, Segment} from 'semantic-ui-react'

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
            <Divider horizontal clearing>           
            <Header as='h1'>What am i Using 🧰 ?</Header>
            </Divider>
            <WhatAmIUsing />
            <Divider horizontal clearing>           
            <Header as='h1'>What am i Learning Now ⌛ ?</Header>
            </Divider>
            <Header as='h3'>- DBMS and DataBase Design</Header>
            <Header as='h3'>- Design Pattern</Header>
            <Header as='h3'>- TDD </Header>
            <Header as='h3'>- DDD(Domain Driven Design)</Header>
            <Divider horizontal clearing>           
            <Header as='h1'>interested To Know More About 🤔 ?</Header>
            </Divider>
                <Header as='h3'>- RX(Reactive Programming) with Angular and React </Header>
                <Header as='h3'>- .NET CORE</Header>
                <Header as='h3'>- Postgres DB</Header>
                <Header as='h3'>- Functional Programming</Header>
                <Header as='h3'>- AWS AND AZURE</Header>
                <Header as='h3'>- Serverless Archeticture</Header>
            <Segment inverted color='grey'>
            {/* <ReachMe /> */}
            </Segment>
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