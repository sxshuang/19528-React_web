// 公共底部组件

import React ,{Component} from 'react';
import {Layout} from 'antd';


class MainFooter extends Component{
    render(){
        return (
            // 这里也可以这么用，在main.header.js组件中，有另外一种写法
            <Layout.Footer style={{textAlign:"center"}}>
                Welcome to learn ❤ React
            </Layout.Footer>
        )
    }
}
export default MainFooter;