import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';
import {Header} from 'semantic-ui-react'
const IndexPage = () => {
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
                I'm Omar Khairy, a full-stack developer Build Testable Scalable Software
            </Header>
                <hr style={br} />
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage