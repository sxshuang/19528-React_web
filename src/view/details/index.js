import React, { Component } from 'react';
// 引入包装对象 react-redux
import {connect} from 'react-redux';
import axios from 'axios';

import TxtDetails from './txtDetails.js';
import ReplyList from './replyList.js';


class Details extends Component {
    constructor(arg){
        super(arg);
        let id=this.props.match.params.id;

        this.getData(id)
    }
 

    getData(id){
       
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"DETAILS_UADATA",
            });

            axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then((res)=>{
                // 把数据更新到redux中
                dispatch({
                    type:"DETAILS_UADATA_SUCC",
                    data:res.data
                })
                console.log(res)
            })
            .catch((error)=>{
                dispatch({
                    type:"DETAILS_UADATA_ERROR",
                    data:error
                })
            })
        })
    }

    render() {
        // console.log(data)
        // console.log(this.props)
        let {loading,data}=this.props
        return (
            <div className="wrap">
                {/* 详情页内容 */}
                <TxtDetails loading={loading} data={data}></TxtDetails>
                {/* 这里是回复评论 */}
                <ReplyList loading={false} replies={data.replies} replyCount={data.reply_count}></ReplyList>
            </div>
        )
    }
}
export default connect(state=>state.details)(Details);