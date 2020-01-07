//1. 引入核心包
import React from 'react'
import './styles/index.css'
import Header from './header.container.js'
import List from './list.container.js'
import Footer from './footer.container.js'
//2. 类组件
class Home extends React.Component {
  render() {
    return (
      <div id="card">
        <Header></Header>
        <List></List>
        <Footer></Footer>
      </div>
    )
  }
}

//3. 导出组件
export default Home
