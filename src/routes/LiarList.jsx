import LiarList from '../components/liarList/LiarList';
import { connect } from 'dva';

export function mapStateToProps({ count }) {
    return {
        count
    }
}

export default connect(mapStateToProps)(LiarList);