import React,{Component} from 'react';
import {Menu,Icon} from 'antd';
import {Link,withRouter} from 'react-router-dom'

class Nav extends Component{
    constructor(arg){
        super(arg);
        // 这个是下边导出 withRouter函数中传给Nav组件的 参数
        // console.log(this.props)
        let now = this.getNow(this.props.location)
        this.state={
            now
        }
    }
    // 刷新后，实现路由和导航栏选中统一
    getNow(location){
        // console.log(location)
        let now = location.pathname.split("/");
        // console.log(now)
        return now[1]
    }
  
    shouldComponentUpdate(nextProps){
        let now = this.getNow(nextProps.location);
        if(now !== this.state.now){
            this.setState({
                now
            })
            return false;
        }else{
            return true
        }
        
    }

    render(){
        // 因为在main-header.js组件中，大屏导航menu用水平排列，超小屏用垂直，所以把menu封装成一个Nav组件，然后传值
        let {mode,id} =this.props;
        return (
            <Menu mode={mode}  id={id} selectedKeys={[this.state.now]}>
            {/* 这里的key值为了实现路由和导航栏统一 */}
            <Menu.Item key="index">
                <Link to="/index/all"><Icon type="home"/>首页</Link>
            </Menu.Item>
            <Menu.Item key="book">
                <Link to="/book"><Icon type="read"/>教程</Link>
            </Menu.Item>
            <Menu.Item key="about">
                <Link to="/about"><Icon type="exclamation-circle"/>关于</Link>
            </Menu.Item>
        </Menu>
        )
    }
}
// 这是实现，刷新后，路由是哪个，导航栏也选中那个，实现统一；比如：路由是教程，则导航栏也是选中教程
export default withRouter((props)=>{
    // console.log(props)
    let {mode,id,location} = props;
    return <Nav mode={mode} id={id} location={location}></Nav>
});