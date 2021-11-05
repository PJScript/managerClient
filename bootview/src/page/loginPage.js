import React from 'react'
import Side from '../component/side'
import axios from 'axios'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAccessToken } from '../redux/actions'

const LoginPage = () => {
  let history = useHistory()
  let dispatch = useDispatch()

  let AccessToken = useSelector((state)=> state.authReducer.AccessToken)
  let [id,setId] = useState()
  let [pw,setPw] = useState()


  const inputId = (e) => {
    setId(e.target.value)
  }
  const inputPw = (e) => {
    setPw(e.target.value)
  }
  const login = async () => {
    await axios.post('http://localhost:4000/auth/login',{account:id,pw:pw}).then((data)=>{
      console.log(data)
      if(JSON.parse(data.config.data).account === 'admin@admin.admin'){
        dispatch(getAccessToken(data.headers.authorization))
        history.push('/home')
    }else{
      alert('권한이 없습니다. 페이지를 이동합니다.')
      window.location = 'http://bootview.info'
    }
    })
  }
  return (
    <div className='loginFormContainer'>
      <h4>admin page</h4>
      <div>
        <div>로그인</div>
        <div>
          <span> ID </span>
          <input onChange={inputId}></input>
        </div>
        <div>
          <span>PW</span>
          <input type='password' onChange={inputPw}></input>
        </div>
        <button onClick={login}>로그인</button>
      </div>
    <div></div>
    </div>
  )
}

export default LoginPage