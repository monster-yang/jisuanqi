//1. 引入核心包
import React from 'react'
import { Button } from 'antd'
import { save } from '../../actions'

//2. 类组件
class Footer extends React.Component {
  save = () => {
    const { list, dispatch } = this.props
    dispatch(save(list))
  }
  render() {
    return (
      <footer className="conter">
        <Button type="primary" onClick={this.save}>
          保存到localStorage
        </Button>
      </footer>
    )
  }
}

//3. 导出组件
export default Footer
