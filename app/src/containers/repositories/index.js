import { connect } from 'react-redux';
import actions from '../../actions/repositories';
import Repositories from '../../views/repositories';

const mapDispatchToProps = dispatch => ({
  sync: username => dispatch(actions.sync(username)),
  search: query => dispatch(actions.search(query)),
});

const mapStateToProps = store => ({
  repositories: store.repositories,
});

export {
  mapDispatchToProps,
  mapStateToProps,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
