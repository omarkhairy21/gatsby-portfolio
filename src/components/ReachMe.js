import React from 'react';
import {Button, Header,Container} from 'semantic-ui-react';
import {allLinks} from '../../Data/Social-Media'

const render = () => {
   return Object.keys(allLinks).map( link => {
    return (<Header as='h4'>
        {link}:{ allLinks[link] }
      </Header>
    )
  });
}
const ReachMe = () => {
  
  return (
    <Container >
    <Header as='h1'>
      Reach Me Out
    </Header>
    {render()}
    </Container>
  )
}

export default ReachMe;