//1. 引入核心包
import React from 'react'
import { Button, Tag } from 'antd'

import { deleteList, addItem } from '../../actions'

//2. 类组件
class List extends React.Component {
  handleDelete = id => {
    const { dispatch } = this.props
    dispatch(deleteList(id))
  }
  handleAdd = id => {
    const { dispatch } = this.props
    dispatch(addItem(id))
  }
  render() {
    // console.log('list', this.props)
    const { list } = this.props
    return (
      <nav>
        {list.map(item => {
          return (
            <div className="mt" key={item.id}>
              <Tag color="blue">{item.number}</Tag>
              <Button
                type="primary"
                shape="circle"
                onClick={() => this.handleAdd(item.id)}
              >
                +
              </Button>
              <Button
                type="primary"
                className="fr"
                onClick={() => this.handleDelete(item.id)}
              >
                删除
              </Button>
            </div>
          )
        })}
      </nav>
    )
  }
}
export default List
