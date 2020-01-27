import React from 'react';
import { Grid , Segment, Image} from 'semantic-ui-react';
import findTheSource from '../../Data/gears';


export const Gears = () => {
  

  return(

  <Grid columns='equal'>
      <Grid.Row stretched>
      <Grid.Column >
          <Image centered  size='small' src={findTheSource('react')} />
          <Image centered  size='small' src={findTheSource('redux')} />
      </Grid.Column>
      <Grid.Column >
          <Image centered  size='small' src={findTheSource('js')} />
          <Image centered  size='small' src={findTheSource('puppeteer')} />
      </Grid.Column>
      <Grid.Column >
          
          <Image centered  size='small' src={findTheSource('typescript')} />
          
          
          <Image centered  size='small' src={findTheSource('gatsby')} />
          
      </Grid.Column>
      <Grid.Column>
            <Image centered  size='small' src={findTheSource('nest')} />
          
          <Image centered  size='small' src={findTheSource('express')} />
          
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column>
          
          <Image centered  size='small' src={findTheSource('redis')} />
          
          
          <Image centered  size='tiny' src={findTheSource('jest')} />
          
          
          <Image centered  size='tiny' src={findTheSource('docker')} />
          
      </Grid.Column>
      <Grid.Column width={6}>
          
          <Image centered  size='small' src={findTheSource('mysql')} />
          
          
          <Image centered  size='small' src={findTheSource('node')} />
          
      </Grid.Column>
      <Grid.Column width={4}>
          
          <Image centered  size='small' src={findTheSource('mongo')} />
          
          
          <Image centered  size='small' src={findTheSource('postgres')} />
          
      </Grid.Column>
      <Grid.Column>
          
          <Image centered  size='small' src={findTheSource('travis')} />
          
          
          <Image centered  size='small' src={findTheSource('netlify')} />
          
      </Grid.Column>
      </Grid.Row>
  </Grid>

)} 