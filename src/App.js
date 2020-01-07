import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './pages/home/index'
//1. 引入核心包
import 'antd/dist/antd.css'

//2. 类组件
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/">
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" component={Home}></Route>
      </Router>
    )
  }
}

//3. 导出组件
export default App
