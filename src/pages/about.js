import React from 'react';
//import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import {Header, Image, Button, Divider ,Segment} from 'semantic-ui-react'
//import { triggerModal } from '../components/Modal';
import {Gears} from '../components/gears';
import avatar from '../../static/22.jpg';

/**
 * button
 * font-size: 1rem;
    border-style: groove;
    border-color: #2196F3;
    background-color: transparent;
 */
const AboutPage = () => {
    const br ={
        margin: '5vh auto',
        boxSizing: 'border-box',
        height: '0.5rem',
        width: '8rem',
        backgroundColor: '#03a9f4',
        marginBottom: '10vh'
    }
    const buttonStyle  = {
        margin: '10vh 10vh',
        padding: '2.5vh 10vh',
        fontDize: 'large',
        'fontWeight': 500
    }
    return (
        <Layout>
             <Head title="About"/>
            <Segment  basic textAlign='center'>
            <Image centered avatar size='small' src={avatar} style={{ padding: 'auto', marginTop:'5vh', borderRadius: '50%'}} />
            <Header as='h1'>Omar Khairy</Header> 
            <Header as='h3' style={{color: '#666'}}>Software Developer, study Computer Engineering</Header> 
            <Header as='h3' textAlign='center'>
                <Header.Content  >
                    <hr style={ br } />
                    <p style={{fontWeight: 300}}>
                    <span>&#128075;</span>I am Omar Khairy, Software Developer, study Computer Engineering
                    Focus on React Stack and Api Implementation. 
                    <span>&#9889;</span>Fascinated to build scalable, maintainable, testable Web Applications
                    </p>

                    <br />

                    { Gears() }    
                   
                </Header.Content>
            </Header>
            <Divider horizontal clearing>Or Download</Divider>

            <Button basic size='large' color='blue' style={buttonStyle}>
            <a href='https://khairy-resume.s3-us-west-1.amazonaws.com/OmarResume.pdf'><span>&#127941;</span>Resume</a>
            </Button>            
            </Segment>

        </Layout>   
    );
}

export default AboutPage;