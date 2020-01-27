import React from 'react';
import {Button, Container} from 'semantic-ui-react';

const Resume = () => {
  return (
    <Container textAlign='center'>
    <Button basic size='large' color='blue'  style={buttonStyle}>
    <a href='https://khairy-resume.s3-us-west-1.amazonaws.com/OmarResume.pdf'><span role="img">&#127941;</span>Resume</a>
    </Button>   
    </Container>
  )
}
const buttonStyle  = {
  margin: '10vh 10vh',
  padding: '2.5vh 10vh',
  fontDize: 'large',
  'fontWeight': 500
}
export default Resume;