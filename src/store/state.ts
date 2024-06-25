export const blankState = {
  user: {
    username: '',
    name: '',
    email: '',
  },
};

let initialState = blankState;

const storeState = localStorage.getItem('state');
if (storeState) {
  initialState = JSON.parse(storeState);
}

const exportState = { ...initialState };

export default exportState;
