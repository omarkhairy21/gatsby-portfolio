import React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head';
import {
    Divider,
    Grid,
    Header,
    List,
    Segment,
    Image
} from 'semantic-ui-react'

import BlogIcon from '../../static/blog_128X128.png';   
import CloudIcon from '../../static/cloud-computing_128X128.png';   
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
            <Head title="Home"/>
            <Header as='h3' color='grey' style={{ marginTop: '10vh' }}>
            <span>&#9889;</span>Fascinated to build scalable, maintainable, testable Web Applications.
            </Header>
            <hr style={br} />
            <Grid>
                <Grid.Column width='16'>
                <Header as='h1' style={{marginBottom:'5vh'}}>
                    <Image size='large' src={BlogIcon} style={{marginRight:'5px'}} />
                    Latest Articles
                <Divider style={{width: '5rem'}}/>
                </Header>
                <List divided relaxed verticalAlign >
                    <List.Item  style={{marginBottom:'1vh'}}>
                    <List.Content>
                        <List.Header as='a' style={{marginBottom:'0.5rem'}}> <span>&#9981;</span> Serverless Social Media</List.Header>
                        <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>-25-8-2019</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item  style={{marginBottom:'1vh'}}>
                    <List.Content>
                        <List.Header as='a' style={{marginBottom:'0.5rem'}}> <span>&#9981;</span> Full Stack Clients Survey</List.Header>
                        <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>-9-9-2019</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item  style={{marginBottom:'1vh'}}>
                    <List.Content>
                        <List.Header as='a' style={{marginBottom:'0.5rem'}}> <span>&#9981;</span> CI/CD and Unit Testing Blog Project</List.Header>
                        <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>-25-9-2019</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item  style={{marginBottom:'1vh'}}>
                    <List.Content>
                        <List.Header as='a' style={{marginBottom:'0.5rem'}}> <span>&#9981;</span> Gatsby Portfolio</List.Header>
                        <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>-15-10-2019</List.Description>
                    </List.Content>
                    </List.Item>
                    </List>
                </Grid.Column>
            </Grid>
            <Divider style={{marginBottom:'5vh'}}/>
            <Grid>
                <Grid.Column width='16'>
                <Header as='h1' style={{marginBottom:'5vh'}}>
                    <Image size='large' src={CloudIcon} style={{marginRight:'5px'}} />
                    Latest Projects
                <Divider style={{width: '5rem'}}/>
                </Header>
                <List divided relaxed verticalAlign >
                    <List.Item  style={{marginBottom:'1vh'}}>
                    <List.Content>
                        <List.Header as='h3' style={{marginBottom:'0.5rem'}}> <span>&#9981;</span> Serverless Social Media</List.Header>
                        <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>-25-8-2019</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item  style={{marginBottom:'1vh'}}>
                    <List.Content>
                        <List.Header as='a' style={{marginBottom:'0.5rem'}}> <span>&#9981;</span> Full Stack Clients Survey</List.Header>
                        <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>-9-9-2019</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item  style={{marginBottom:'1vh'}}>
                    <List.Content>
                        <List.Header as='a' style={{marginBottom:'0.5rem'}}> <span>&#9981;</span> CI/CD and Unit Testing Blog Project</List.Header>
                        <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>-25-9-2019</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item  style={{marginBottom:'1vh'}}>
                    <List.Content>
                        <List.Header as='a' style={{marginBottom:'0.5rem'}}> <span>&#9981;</span> Gatsby Portfolio</List.Header>
                        <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>-15-10-2019</List.Description>
                    </List.Content>
                    </List.Item>
                    </List>
                </Grid.Column>
            </Grid>
        </Layout>
    )
}

/**
 *  <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
 */
export default IndexPage