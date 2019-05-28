import React, { Component } from 'react';
import { Avatar, Row, Col } from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';

import UserList from './userList.js'


class User extends Component {
    constructor(arg){
        super(arg);
        let id = this.props.match.params.id;
        this.getData(id);
    }

    // 获取数据并保存到redux中
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"USER_UPDATA"
            });

            axios.get(`https://cnodejs.org/api/v1/user/${id}`).then((res)=>{
                dispatch({
                    type:"USER_UPDATA_SUCC",
                    data:res.data
                })
            })
            .catch((error)=>{
                dispatch({
                    type:"USER_UPDATA_ERROR"
                })
            })
        })
    }

    // 生命周期 ：组件发生更新
    shouldComponentUpdate(nextProps){
        let id = this.props.match.params.id;
        let nextId = nextProps.match.params.id;
        if(id !== nextId){
            this.getData(nextId);
            // 如果不一样，组件不要更新或者不要重新渲染
            return false;
        }else{
            return true
        }
        
    }

    render() {
 
        // 先从props把这两个数据拿出来，看看user的reducer的state格式就明白了了
        let {loading,data}=this.props;
        // 再把这些数据从上边props拿过来的data中拿
        let { avatar_url, loginname, create_at, score, recent_topics,recent_replies } = data;
        return (

            <div className="wrap">
                <Avatar src={avatar_url} className="userAvatar"></Avatar>
                <Row className="userInfo">
                    <Col md={8}>
                        用户名：<a>{loginname}</a>
                    </Col>
                    <Col md={8}>
                        积分：<a>{score}</a>
                    </Col>
                    <Col md={8}>
                        注册时间：<a>{create_at.split("T")[0]}</a>
                    </Col>
                </Row>
                <UserList loading={loading} title="最近创建话题" data={recent_topics}></UserList>

                <UserList loading={loading} title="最近回复话题" data={recent_replies}></UserList>
            </div>
        )
    }
}
export default connect(state=>state.user)(User);