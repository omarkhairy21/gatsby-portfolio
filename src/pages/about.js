import React from 'react';
//import { Link } from 'gatsby';

import Layout from '../components/layout';
import {Header, Image, Modal, Button, Grid, Divider ,Segment} from 'semantic-ui-react'
import { triggerModal } from '../components/Modal';
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
            <Segment color='blue' stacked textAlign='center'>
            <Image centered avatar size='small' src={avatar} style={{ padding: 'auto', marginTop:'5vh'}} />
            <Header as='h3' textAlign='center'>
                <Header.Content  >
                    <hr style={ br } />
                    <p style={{fontWeight: 300}}>
                    &#128075;I am Omar Khairy, Software Developer, study Computer Engineering
                    Focus on React Stack and Api Implementation. 
                    &#9889;Fascinated to build scalable, maintainable, testable Web Applications
                    </p>

                    <br />

                    { triggerModal() }    
                   
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