import * as actionTypes from './actionTypes';


export const setUserName = name => ({
  type: actionTypes.SET_USER_NAME,
  name,
});

export const setUserAvatar = avatar => ({
  type: actionTypes.SET_USER_AVATAR,
  avatar,
});
