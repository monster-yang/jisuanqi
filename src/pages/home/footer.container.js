import Footer from './footer'
import { connect } from 'react-redux'

let mapStateToProps = state => {
  return {
    list: state
  }
}
export default connect(mapStateToProps)(Footer)
