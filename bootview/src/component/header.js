import React from 'react'

const Header = () => {
  const logoutBtn = () => {
    window.location = '/'
    alert('로그아웃 되었습니다.')
  }
  return (
    <div className='headerContainer'>
      <div className='headerContainer-searchBox'>
        <div>검색</div>
        <input></input>
        <button>search</button>
      </div>
      <div>
        <div className='hover' onClick={logoutBtn}>로그아웃 </div>
      </div>

    </div>

  )
}

export default Header