import React from 'react'
import Side from '../component/side'
import Header from '../component/header'
const UserListPage = () => {
  return (
    <div className="App">
      <Side />
      <div className='App-centerContainer'>
        <Header />
        <div className='App-centerInner'>
          <h4>유저 관리 페이지</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">관리 옵션</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <span className="hover">계정 관리 /</span>
                  <span className="hover">글 목록 /</span>
                  <span className="hover">알림 전송</span>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <span className="hover">계정 관리 /</span>
                  <span className="hover">글 목록 /</span>
                  <span className="hover">알림 전송</span>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>
                  <span className="hover">계정 관리 /</span>
                  <span className="hover">글 목록 /</span>
                  <span className="hover">알림 전송</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserListPage