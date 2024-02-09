import { githubActions } from '../store/features/github.slice'; // Adjust import path
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const actions = {
  ...githubActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
