import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import {Header, Image, Modal, Button, Grid, Segment} from 'semantic-ui-react'

import avatar from '../../static/22.jpg';
const AboutPage = () => {
    return (
        <Layout>
            <Segment basic textAlign='center'>
            <Image centered avatar size='small' src={avatar} style={{ padding: 'auto'}} />
            <Header as='h3' textAlign='center'>
                <Header.Content>
                    Hey, I am Omar Khairy I Full Stack Web Developer, study Computer Engineering
                    Focus on React Stack and Api Implementation Using Theses 
                    <Modal trigger={<Button> Gears </Button>} centered={false}>
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