import React from "react";

import data from './data.js';

import PublicCard from '../public_Card.js'

class Book extends React.Component {
    render() {
        return (
            <PublicCard data={data}></PublicCard>
        )
    }
}
export default Book;