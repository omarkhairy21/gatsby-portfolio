import React from 'react';
import {Header, Image, Grid, Card} from 'semantic-ui-react';
import Resume from './resume';
const WhoAmI= () => {

  return(
    <Grid style={aboutGrid}>
    <Grid.Column width={8}>
    <Header as='h1' style={aboutH1}>
        WHO AM I ?
    </Header>
    <Header as='h2'style={aboutH2}>
        <span>&#128075;</span>I am Omar Khairy, Software Developer, study Computer Engineering
        Focus on React Stack and Api Implementation. 
        <span>&#9889;</span>Fascinated to build scalable, maintainable, testable Web Applications
    </Header>
    </Grid.Column>
    <Grid.Column width={8}>
    <Card color='blue'  style={CardStyle}>
    <Image src='https://avatars2.githubusercontent.com/u/30784772?s=460&v=4' wrapped ui={true} />
    <Card.Content>
    <Card.Header>Omar Khairy</Card.Header>
    <Card.Meta>
        <span className='date'>Joined in 2015 🔥</span>
    </Card.Meta>
    <Card.Description>
        Software Developer
    </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Resume />
    </Card.Content>
    </Card>
    </Grid.Column>
    </Grid>
  )
}

const aboutGrid={
  margin: '10vh auto'
}
const CardStyle = {
  boxShadow:'0.5rem 1.25rem 1.75rem 0 rgba(0,0,0,.6)', 
  borderColor:'#3a3a3a',
  // margin:'10vh auto'
}
const aboutH1={
  color: '#f3f4f7',
  fontSize: '4rem',
  background: '#17a5ff'
}
const aboutH2={
  lineHeight: '35px',
  fontWeight: '300'
}

export default WhoAmI;       