import List from './list'
import { connect } from 'react-redux'
let mapStateToProps = state => {
  return {
    list: state
  }
}
//3. 导出组件
export default connect(mapStateToProps)(List)
