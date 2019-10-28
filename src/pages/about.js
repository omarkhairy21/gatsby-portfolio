import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import {Header, Image, Modal, Button, Grid, Segment} from 'semantic-ui-react'
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
    return (
        <Layout>
            <Segment color='blue' stacked textAlign='center'>
            <Image centered avatar size='small' src={avatar} style={{ padding: 'auto'}} />
            <Header as='h3' textAlign='center'>
                <Header.Content  >
                    <hr style={ br } />
                    <p style={{fontWeight: 300}}>
                    &#128075;I am Omar Khairy, Software Developer, study Computer Engineering
                    Focus on React Stack and Api Implementation. 
                    &#9889;Fascinated to build scalable, maintainable, testable Web Applications
                    </p>

                    <br />

                    <Modal trigger={<Button> &#128295; My Gears </Button>} centered={false}>
                        <Modal.Header>Gears</Modal.Header>
                        <Modal.Content >
                        <Grid columns='equal'>
                            <Grid.Row stretched>
                            <Grid.Column>
                                <Segment>React.js</Segment>
                                <Segment>Redux.js</Segment>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Segment>
                                    Front End
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Nest.js</Segment>
                                <Segment>Express.js</Segment>
                            </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column>
                                <Segment>Api</Segment>
                                <Segment>Jest.js</Segment>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Segment>
                                    Back-End
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Travis</Segment>
                                <Segment>Unit Testing</Segment>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Modal.Content>
                    </Modal>
                </Header.Content>
            </Header>
            </Segment>            
        </Layout>   
    );
}

export default AboutPage;