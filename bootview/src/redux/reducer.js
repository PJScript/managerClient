import storageSession from 'redux-persist/lib/storage/session'
import { initState } from './initStates'
import { GET_ACCESSTOKEN, CHECK_LOGIN, GET_USER_LIST } from './actions'
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";


const authReducer = (state = initState, action) => {
  switch(action.type){
    case GET_ACCESSTOKEN:
      return { 
        ...state,
        AccessToken:action.payload.AccessToken
      }
    case CHECK_LOGIN:
      return {
        ...state,
        LoginState:action.payload.LoginState
      }
    case GET_USER_LIST:
      return {
        ...state,
        UserList:action.payload.UserList
      }
    default:
      return state
  }
}








const rootReducer = combineReducers({
  authReducer
})

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage: storageSession,
  // blacklist -> 그것만 제외합니다
};

export default persistReducer(persistConfig, rootReducer);