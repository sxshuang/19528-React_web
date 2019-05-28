// 公共的标签
import React, { Component } from 'react';
import { Tag } from 'antd';
// 引入tab.js
import tab from './tab.js'

// const tab = {
//     good: {
//         color: "green",
//         txt: '精华'
//     },
//     top: {
//         color: "magenta",
//         txt: '置顶'
//     },
//     job: {
//         color: 'cyan',
//         txt: '招聘'
//     },
//     ask: {
//         color: 'blue',
//         txt: '问答'
//     },
//     dev: {
//         color: 'lime',
//         txt: '测试'
//     },
//     share: {
//         color: 'purple',
//         txt: '分享'
//     }
// }

function getTab(data) {
    let nowTab = (
        data.top ?
            "top" :
            data.good ?
                "good" : data.tab
    )
    // console.log(data)
    return tab.filter((item) => {
        return item.tab === nowTab
    })[0];

}
export default class TxtTag extends Component {


    render() {
        // console.log(this.props.data)
        let nowTab = getTab(this.props.data)
        // console.log(nowTab)
        return <Tag color={nowTab.color}>{nowTab.txt}</Tag>
    }
}