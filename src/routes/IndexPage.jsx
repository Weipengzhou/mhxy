import IndexPage from '../components/indexPage/IndexPage';
import { connect } from 'dva';

export function mapStateToProps({ count }) {
    return {
        count
    }
}

export default connect(mapStateToProps)(IndexPage);