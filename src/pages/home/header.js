//1. 引入核心包
import React from 'react'
import { Button } from 'antd'
import { addList, addAll } from '../../actions'

//2. 类组件
class Header extends React.Component {
  handleAdd = () => {
    const { dispatch } = this.props
    dispatch(addList())
  }
  handleAddAll = () => {
    const { dispatch, list } = this.props
    if (list.length === 0) {
      return
    }
    dispatch(addAll())
  }
  render() {
    return (
      <header className="header">
        <Button type="primary" shape="circle" onClick={this.handleAddAll}>
          +
        </Button>
        <Button type="primary" className="fr" onClick={this.handleAdd}>
          添加
        </Button>
      </header>
    )
  }
}

//3. 导出组件
export default Header
