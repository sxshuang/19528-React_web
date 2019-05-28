import React from 'react';

// 导入路由组件
import RouterIndex from './router/index.js'
// 导入公共头部和底部
import MainHeader from './view/main-header.js'
import MainFooter from './view/main-footer.js'

// 导入样式
import './view/index.css'


function App() {
  return ( 
    <div className="pageWrap">
      <MainHeader/>
      <main className="main">
        {/* 路由导航 */}
        <RouterIndex></RouterIndex>
      </main>
      <MainFooter/>
    </div>
  )
}

export default App;
