import React, { Component } from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import {
  Header, Image,
  Item, Responsive ,
  Menu ,Grid,
  Segment
  } from 'semantic-ui-react'
import projectPicture from '../../static/browser_128X128.png';

class projects extends Component {
   br = {
    boxSizing: 'border-box',
    height: '0.5rem',
    width: '8rem',
    backgroundColor: '#03a9f4',
    marginBottom: '10vh'
  }

  state = { 
    activeItem: 'Full Stack',
    selectedItem:'links'
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name, selectedItem:name })
  displaySegment = (name) => (
    <Segment color='blue' stacked >
    <Item>
        <Grid>
          <Grid.Column width='6'>
            <Image bordered dimmer rounded src={projectPicture} />
          </Grid.Column>
          <Grid.Column width='10'>
          <Item.Content>
          <Item.Header as='a'><h2>{name}</h2></Item.Header>
          <Item.Meta>
            <span>Date</span>
            <span>Category</span>
          </Item.Meta>
          <Item.Description >
            A description which may flow for several lines and give context to the content.
          </Item.Description>
        </Item.Content>
          </Grid.Column>
        </Grid>
      </Item>
    </Segment>
  )
  menuForMobil = (activeItem) => (
    <Grid>
    <Grid.Column width={16}>
      <Menu attached='top' tabular>
        <Menu.Item
          name='Full Stack'
          active={activeItem === 'Full Stack'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='React.js'
          active={activeItem === 'React.js'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='TypeScript'
          active={activeItem === 'TypeScript'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Algorithms'
          active={activeItem === 'Algorithms'}
          onClick={this.handleItemClick}
        />
      </Menu>
    </Grid.Column>

    <Grid.Column stretched width={16}>
    {this.displaySegment(activeItem)}
    </Grid.Column>
  </Grid>
  )

  menuForPc = (activeItem) => (
    <Grid>
    <Grid.Column width={4}>
      <Menu fluid vertical tabular color='blue'>
        <Menu.Item
          name='bio'
          active={activeItem === 'bio'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='pics'
          active={activeItem === 'pics'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='companies'
          active={activeItem === 'companies'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='links'
          active={activeItem === 'links'}
          onClick={this.handleItemClick}
        />
      </Menu>
    </Grid.Column>

    <Grid.Column stretched width={12}>
    {this.displaySegment(activeItem)}
    </Grid.Column>
  </Grid>
  )
  render(){
    const { activeItem } = this.state;
    return (
        <Layout>
        <Head title="Projects"/>
        <Header as='h2' color='blue' style={{ marginTop: '10vh' }}>
          Latest Projects
        </Header>
        <hr style={this.br} />
          <Responsive minWidth={220} maxWidth={798}>
            { this.menuForMobil(activeItem) }
          </Responsive>
          <Responsive minWidth={799} maxWidth={2559}> 
            { this.menuForPc(activeItem) }
          </Responsive>
        </Layout>   
    );
  }  
}

export default projects;