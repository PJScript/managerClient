import React from 'react'
import Side from '../component/side'
import Header from '../component/header'
const ChatRoomPage = () => {
  return (
    <div className="App">
      <Side />
      <div className='App-centerContainer'>
        <Header />
        <div className='App-centerInner'>
          <h4>채팅 룸 관리 페이지</h4>
          <div className='RoomListContainer'>
            <div>
            <div className="RoomListStatus wait">
              <h6>대기 중</h6>
            </div>
              <ul>
                <li className='RoomListItem'>
                  <span className='b'>고유 넘버 :</span>
                  <span> z1Kdac34 </span>
                  <span className='b'> 유저네임 :</span>
                  <span> 오렌지 원숭이</span>
                </li>
              </ul>
            </div>
            <div>
            <div className="RoomListStatus active">
              <h6>진행 중</h6>
            </div>
              <ul className='RoomListContainer'>
                <li className='RoomListItem'>
                  <span className='b'>고유 넘버 :</span>
                  <span> z1Kdac34</span>
                  <span className='b'> 유저네임 :</span>
                  <span> 오렌지 원숭이</span>
                </li>
              </ul>
            </div>
            <div>
            <div>
              <h6 className="RoomListStatus blank">임시 구역</h6>
            </div>  
              <ul className='RoomListContainer'>
                <li className='RoomListItem'>
                  <span className='b'>고유 넘버 :</span>
                  <span> z1Kdac34</span>
                  <span className='b'> 유저네임 :</span>
                  <span> 오렌지 원숭이</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ChatRoomPage