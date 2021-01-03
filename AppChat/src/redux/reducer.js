import * as types from './constants';

const initialState = {
  //user
  idUser: '',
  name: '',
  avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/UlIqmHJn-SK.gif',
  //data_all
  arrayUser: [],
  myFriend: [],
  groupChat: [],
};
function notesReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        idUser: action.idUser,
        name: action.name,
        avatar: action.avatar,
      };
    case types.ADD_DATA_DB:
      return {
        ...state,
        arrayUser: action.arrayUser,
        myFriend: action.myFriend,
        groupChat: action.groupChat,
      };
    default:
      return state;
  }
}

export default notesReducer;
