import { blankState } from './state';

function reducer(state: any, action: any) {
  let json;
  switch (action.type) {
    case 'SET_USER':
      json = {
        ...state,
        user: action.payload,
      };
      break;
    case 'UNSET_USER':
      json = {
        ...state,
        user: blankState.user,
      };
      break;
    default:
      throw new Error();
  }
  localStorage.setItem('state', JSON.stringify(json));
  return json;
}

export default reducer;
