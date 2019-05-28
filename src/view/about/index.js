import React, { Component } from 'react';

import data from './data.js'
import PublicCard from '../public_Card.js'


class About extends Component {
    render() {
        return (
            <PublicCard data={data}></PublicCard>
        )
    }
}
export default About;