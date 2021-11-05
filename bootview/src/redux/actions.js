export const GET_ACCESSTOKEN = 'GET_ACCESSTOKEN'
export const CHECK_LOGIN = 'CHECK_LOGIN'
export const GET_USER_LIST = 'GET_USER_LIST'
export const getAccessToken = (AccessToken) => {
  return {
    type:GET_ACCESSTOKEN,
    payload:{
      AccessToken:AccessToken
    }
  }
}

export const loginState = (LoginState) => {
  return {
    type:CHECK_LOGIN,
    payload:{
      LoginState:LoginState
    }
  }
}

export const getUserAction = (UserList) => {
  return {
    type:GET_USER_LIST,
    payload:{
      UserList:UserList
    }
  }
}