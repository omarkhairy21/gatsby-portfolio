import React from 'react';
import { Grid , Segment, Image} from 'semantic-ui-react';
import findTheSource from '../../Data/gears';


export const Gears = () => {
  

  return(

  <Grid columns='equal'>
      <Grid.Row stretched>
      <Grid.Column >
          <Segment>
          <Image centered  size='small' src={findTheSource('react')} />
          </Segment>
          <Segment> <Image centered  size='small' src={findTheSource('redux')} /></Segment>
      </Grid.Column>
      <Grid.Column >
          <Segment>
          <Image centered  size='small' src={findTheSource('js')} />
          </Segment>
          <Segment> <Image centered  size='small' src={findTheSource('puppeteer')} /></Segment>
      </Grid.Column>
      <Grid.Column >
          <Segment>
          <Image centered  size='small' src={findTheSource('typescript')} />
          </Segment>
          <Segment>
          <Image centered  size='small' src={findTheSource('gatsby')} />
          </Segment>
      </Grid.Column>
      <Grid.Column>
          <Segment>  <Image centered  size='small' src={findTheSource('nest')} /></Segment>
          <Segment>
          <Image centered  size='small' src={findTheSource('express')} />
          </Segment>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column>
          <Segment>
          <Image centered  size='small' src={findTheSource('redis')} />
          </Segment>
          <Segment >
          <Image centered  size='tiny' src={findTheSource('jest')} />
          </Segment>
          <Segment >
          <Image centered  size='tiny' src={findTheSource('docker')} />
          </Segment>
      </Grid.Column>
      <Grid.Column width={6}>
          <Segment>
          <Image centered  size='small' src={findTheSource('mysql')} />
          </Segment>
          <Segment>
          <Image centered  size='small' src={findTheSource('node')} />
          </Segment>
      </Grid.Column>
      <Grid.Column width={4}>
          <Segment>
          <Image centered  size='small' src={findTheSource('mongo')} />
          </Segment>
          <Segment>
          <Image centered  size='small' src={findTheSource('postgres')} />
          </Segment>
      </Grid.Column>
      <Grid.Column>
          <Segment>
          <Image centered  size='small' src={findTheSource('travis')} />
          </Segment>
          <Segment>
          <Image centered  size='small' src={findTheSource('netlify')} />
          </Segment>
      </Grid.Column>
      </Grid.Row>
  </Grid>

)} 