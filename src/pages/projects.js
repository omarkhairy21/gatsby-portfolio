import React from 'react';
import Layout from '../components/layout';
import {Header, Image, Divider, Button, Grid, Segment} from 'semantic-ui-react'
import projectPicture from '../../static/medium-thumb.png';
const projects = () => {
  const br ={
    boxSizing: 'border-box',
    height: '0.5rem',
    width: '8rem',
    backgroundColor: '#03a9f4',
    marginBottom: '10vh'
  }
    return (
        <Layout>
              <Header as='h2' color='blue' style={{ marginTop: '10vh' }}>
               Latest Projects
            </Header>
            <hr style={br} />
            <Grid relaxed >
            <Segment vertical>  
            <Grid.Row >
                <Grid.Column width={4}>
                  <Image inline src={projectPicture} />
                </Grid.Column>
                <Grid.Column>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Grid.Column>
              </Grid.Row>
            </Segment>

              <Grid.Column width={16}>
                <Segment color='blue'>
                <Grid>
                <Grid.Column width={4}>
                    <Image inline bordered src={projectPicture} />
                  </Grid.Column>
                  <Grid.Column width={10}>
                  <Header>Lorem Title</Header>
                   <p>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                   </p> 
                  </Grid.Column>
                </Grid>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Image src={projectPicture} />
              </Grid.Column>
              <Grid.Column width={10}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </Grid.Column>
            </Grid>
        </Layout>   
    );
}

export default projects;