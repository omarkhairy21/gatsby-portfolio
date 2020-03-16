import React from 'react';
import { Modal, Button, Grid ,Segment} from 'semantic-ui-react';

export const triggerModal = () => {
  
  return(
  <Modal trigger={<Button> &#128295; My Gears </Button>} centered={false}>
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
)} 