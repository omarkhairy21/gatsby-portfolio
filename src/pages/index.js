import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';
import {  Button,
    Divider,
    Grid,
    Header,
    List,
    Segment, } from 'semantic-ui-react'
const IndexPage = () => {
    const br ={
        boxSizing: 'border-box',
        height: '0.5rem',
        width: '8rem',
        backgroundColor: '#03a9f4',
        marginBottom: '10vh'
    }
    return (
        <Layout>
            <Header as='h3' color='grey' style={{ marginTop: '10vh' }}>
            &#9889;Fascinated to build scalable, maintainable, testable Web Applications.
            </Header>
                <hr style={br} />
                <Segment >
                    <Grid columns={2} stackable>
                    <Divider vertical />

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                        <Header style={{marginBottom:'5vh'}}>
                           &#127881; Latest Projects
                           <Divider style={{width: '5rem'}}/>
                        </Header>
                        <List divided relaxed verticalAlign >
                            <List.Item  style={{marginBottom:'1vh'}}>
                            <List.Content>
                                <List.Header as='a' style={{marginBottom:'0.5rem'}}>&#9981; Semantic-Org/Semantic-UI</List.Header>
                                <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>-Updated 10 mins ago</List.Description>
                            </List.Content>
                            </List.Item>
                            <List.Item  style={{marginBottom:'1vh'}}>
                            <List.Content>
                                <List.Header as='a' style={{marginBottom:'0.5rem'}}>&#9981; Semantic-Org/Semantic-UI</List.Header>
                                <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>-Updated 10 mins ago</List.Description>
                            </List.Content>
                            </List.Item>
                         </List>
                        </Grid.Column>
                        <Grid.Column>
                        <Header style={{marginBottom:'5vh'}}>
                            &#9997;  Latest Articles
                            <Divider style={{width: '5rem'}}/>
                        </Header>
                        <List divided relaxed verticalAlign>
                            <List.Item>
                            <List.Content>
                                <List.Header as='a'>&#9981; Semantic-Org/Semantic-UI</List.Header>
                                <List.Description as='a'>Updated 10 mins ago</List.Description>
                            </List.Content>
                            </List.Item>
                            <List.Item>
                            <List.Content>
                                <List.Header as='a'>&#9977; Semantic-Org/Semantic-UI-Docs</List.Header>
                                <List.Description as='a'>Updated 22 mins ago</List.Description>
                            </List.Content>
                            </List.Item>
                            <List.Item>
                            <List.Content>
                                <List.Header as='a'>&#9977;Semantic-Org/Semantic-UI-Meteor</List.Header>
                                <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                            </List.Item>
                         </List>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Segment>
        </Layout>
    )
}

/**
 *  <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
 */
export default IndexPage