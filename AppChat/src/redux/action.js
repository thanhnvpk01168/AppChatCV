import * as types from './constants';
//USER
export function AddUser(idUser, name, avatar) {
  return {
    type: types.ADD_USER,
    idUser,
    name,
    avatar,
  };
}
export function AddDataDB(arrayUser, myFriend, groupChat) {
  return {
    type: types.ADD_DATA_DB,
    arrayUser,
    myFriend,
    groupChat,
  };
}
