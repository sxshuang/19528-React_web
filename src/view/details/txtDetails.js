import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import TxtTag from '../txtTag.js'


export default class TxtDetails extends Component {
    render() {
        let { loading, data } = this.props
        const title = (<div>
            <h1>{data.title}</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                <TxtTag data={data}></TxtTag>
                <Avatar src={data.author}></Avatar>&nbsp;
                <Link to={"/user/" + data.author.loginname}>{data.author.loginname}</Link>&nbsp;
                发表于：{data.create_at.split("T")[0]}
            </div>
        </div>)
        return (
            <Card title={title} loading={loading}>
                <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </Card>
        )
    }
}