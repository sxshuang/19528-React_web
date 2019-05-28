// 公共头部组件
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// 导入antd 的各个组件 ，进行Layout布局
import { Layout, Row, Col, Divider,Icon,Dropdown,Button } from 'antd'
import Nav from './nav.js'
//必须放在他的后边
// const { Header } = Layout;





class MainHeader extends Component {
    render() {
        return (
            <Layout.Header>
                    <Row className="wrap">
                        <Col md={6} xs={24}>
                            <h1 id="logo">Study</h1>
                        </Col>
                        <Col md={18} xs={0}>
                            <Divider type="vertical" className="headerDivider" />
                            {/* 利用Nav组件，并传值 */}
                            <Nav id="nav" mode="horizontal"/>
                        </Col>
                        <Col md={0} xs={24} className="xsNav">
                            {/* 利用Nav组件，并传值 */}
                           <Dropdown overlay={<Nav mode="vertical" id="xsNav"/>} trigger={["click","touchend"]} placement="bottomCenter">
                                <Button><Icon type="bars"/></Button>
                           </Dropdown>
                        </Col>
                    </Row>      
            </Layout.Header>
        )
    }
}
export default MainHeader;