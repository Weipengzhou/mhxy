import IndexPage from '../components/IndexPage/IndexPage';
import { StoreState } from '../types/IndexPage.lib';
import { connect } from 'dva';

export function mapStateToProps({ count }: StoreState) {
    return {
        count
    }
}

export default connect(mapStateToProps)(IndexPage);