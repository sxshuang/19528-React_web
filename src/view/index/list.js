import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
// import data from './data.js';
import TxtTag from '../txtTag.js';
// 导入react-redux的包装函数
import { connect } from 'react-redux'
// 引入axios
import axios from 'axios';

class IndexList extends Component {
    constructor(arg) {
        super(arg);
        // 定义分页开关
        this.isStart = true;
        this.state = {
            page: 1
        }
        // 这个是当前组件的tab类，也就是all
        this.getData(this.props.tab, this.state.page)
    }
    // 生命周期函数：当组件更新的时候收到新的props
    shouldComponentUpdate(nextProps, nextState) {
        // 在刚进入的时候，分页关闭，不会在点击的时候跳抖
        this.isStart = false
        // 实现分页跳转加载
        if (this.state.page !== nextState.page) {
            this.getData(nextProps.tab, nextState.page);
            return false;
        }

        // console.log(nextProps);
        // 这里就是切换组件的时候，就是所切换到的组件的 tab；比如，从 当前全部(all)=> 分享(share)
        if (this.props.tab !== nextProps.tab) {
            this.state.page = 1;
            // 如果当前的tab 不等于 nextProps.tab 才调用，要不然发送请求redux在变化，则会一直调用形成死循环
            this.getData(nextProps.tab, 1);
            this.setState({
                page: 1
            });
            return false;
        }
        return true;

    }

    // 获取数据并更新到redux中
    getData(tab, page) {
        this.props.dispatch((dispatch) => {
            // 在网速慢的时候，中间会有点卡顿，然后就会突然显示新数据，在请求之前发送一个新的状态
            dispatch({
                type: "LIST_UPDATA"
            });

            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=8`).then((res) => {
                // console.log(res.data);
                // 把数据更新到redux中
                dispatch({
                    type: 'LIST_UPDATA_SUCC',
                    data: res.data
                })
            }).catch((error) => {
                dispatch({
                    type: 'LIST_UPDATA_ERROR',
                    data: error
                })
            })
        })
    }
    render() {
        // console.log(data)
        // 拿到存在redux中的数据
        // console.log(this.props)
        // 需要存到redux的数据 loading、data、page、tab
        // console.log(this.props)
        let { loading, data } = this.props;
        // console.log(this.state.page)
        let pagination = {
            current: this.state.page,
            pageSize: 10,
            total: 100,
            onChange: ((current) => {
                // console.log(current); //这个是跳转的页
                this.setState({
                    page: current
                });
            })
        };
        return <List
            loading={loading}
            dataSource={data}
            pagination={this.isStart ? false : pagination}
            renderItem={item => (<List.Item actions={["回复:" + item.reply_count, "访问:" + item.visit_count]} key={item.id}>
                <List.Item.Meta
                    avatar={<Avatar src={item.author.avatar_url}></Avatar>}
                    title={<div><TxtTag data={item}></TxtTag><Link to={"/details/" + item.id}>{item.title}</Link></div>}
                    description={<p><Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                        {/* split() 以指定的字符为界限，划分多个子串，并返回新数组，这里看请求的数据，根据T拆分，取数组中下标为0的部分 */}
                        发表于:{item.create_at.split("T")[0]}
                    </p>}
                />
            </List.Item>)}
        >

        </List>
    }
}
export default connect(state => state.list)(IndexList);