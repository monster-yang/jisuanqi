import Header from './header'
import { connect } from 'react-redux'

let mapStateToProps = state => {
  return {
    list: state
  }
}
export default connect(mapStateToProps)(Header)
