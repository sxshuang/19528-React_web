import React, { Component } from 'react';
import { Card, List, Avatar } from 'antd';
import {Link} from 'react-router-dom';

export default class UserList extends Component {
    render() {
        let { loading, title, data } = this.props
        return (
            <Card loading={loading} title={title} type="inner">
                <List className="userList" dataSource={data} renderItem={(item) => {
                    return <List.Item key={item.id}>
                        <Avatar src={item.author.avatar_url}></Avatar>
                        <Link to={"/user/"+item.author.loginname} className="userName">{item.author.loginname}</Link>
                        <h4><Link to={"/details/"+item.id}>{item.title}</Link></h4>
                        <time>最后回复:{item.last_reply_at.split('T')[0]}</time>
                    </List.Item>
                }}>
                </List>
            </Card>
        )
    }
}