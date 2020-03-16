import React, {Fragment} from 'react';
import {Header, Container} from 'semantic-ui-react'

const WhatAmIUsing= () => {

  return(
        <Fragment>
            {/* <Container textAlign='center'>
            <Header as='h1'>What am i Using 🧰 ?</Header>
            </Container> */}
            <Header as='h3'>
                Main Programming Language 🕹️: 
                <span  style={specialBlue}>JavaScript</span>
                <span  style={specialBlue}>TypeScript</span>, Python
                Frontend: React Redux Redux-Saga Gatsby
            </Header>
            <Header as='h3'>
                Backend: 
                <span  style={specialBlue}>Nodejs</span>
                <span  style={specialBlue}>Express</span>
                <span  style={specialBlue}> Nest.js</span>
                 , flask
            </Header>
            <Header as='h3'>
                Databases: 
                <span  style={specialBlue}>Postgres</span>
                <span  style={specialBlue}>Mysql</span>
                <span  style={specialBlue}>Mongodb</span>
            </Header>
            <Header as='h3'>
                Unit Testing: 
                <span  style={specialBlue}>Jest</span>
                <span  style={specialBlue}>Puppeteer</span>
                <span>Mocha</span>
            </Header>
            <Header as='h3'>
                Work-Flow: 
                <span  style={specialBlue}>Travis Ci</span>
                <span  style={specialBlue}>Docker</span>
            </Header>
        </Fragment>
  )
}

const specialBlue = {
  background: '#17a5ff',
  marginLeft: '0.4rem',
  color: '#f3f4f7',
}

export default WhatAmIUsing;       