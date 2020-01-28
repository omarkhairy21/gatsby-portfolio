import React from 'react';
import {Button, Container, Header} from 'semantic-ui-react';

const Resume = () => {
  return (
    <Container textAlign='center'>
    <Button primary size='large' color='blue'  style={buttonStyle} >
    <a href='https://khairy-resume.s3-us-west-1.amazonaws.com/OmarResume.pdf' style={{color:'white'}}>
     <span role="img">&#127941;</span>Download Resume
     </a>
    </Button>   
    </Container>
  )
}
const buttonStyle  = {
  padding: '2.5vh 5vh',  
  fontWeight: 500
}
export default Resume;