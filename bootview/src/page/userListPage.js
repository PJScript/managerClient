import React from 'react'
import Side from '../component/side'
import Header from '../component/header'
import { useSelector } from 'react-redux'
const UserListPage = () => {
  let UserList = useSelector((state) => state.authReducer.UserList)
  let pageCnt = useSelector((state) => state.authReducer.PageCnt)
  const pageNationBtn = () =>{

  }
  const pageNumberMaker = () =>{
    let result = []
    let quotient = pageCnt / 100
    let remainder = pageCnt % 100
    let bugTest = 0
    if(remainder > 0){
      quotient = quotient + 1
    }

    for(let i=1; i <= quotient; i++){
      bugTest = i
      result.push(
        <li class="page-item"><div className="page-link hover" onClick={pageNationBtn}>{i}</div></li>
      )
    }
    result.push(
      <li class="page-item"><div className="page-link hover" onClick={pageNationBtn}>{bugTest+1}</div>bugTest</li>
    )
    return result
  }
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
                <th scope="col">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </th>
                <th scope="col">#</th>
                <th scope="col">유저 코드</th>
                <th scope="col">계정</th>
                <th scope="col">별명</th>
                <th scope="col">성별</th>
                <th scope="col">관리 옵션</th>
              </tr>
            </thead>
            <tbody>
            {UserList.map((item)=>{
              return (
                <tr>
                <th><input type='checkbox'></input></th>
                <th scope="row">{UserList.indexOf(item)+1}</th>
                <td>{item.id}</td>
                <td>{item.account}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>
                  <span className="hover">계정 관리 /</span>
                  <span className="hover">글 목록 /</span>
                  <span className="hover">알림 전송</span>
                </td>
              </tr>
              )
            })}
            </tbody>
          </table>
          <div className='pagenation-navBox'>
          <div>nav left</div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><div className="page-link hover" onClick={pageNationBtn}>Previous</div></li>
              {pageNumberMaker()}
              <li class="page-item"><div className="page-link hover" onClick={pageNationBtn}>Next</div></li>
            </ul>
          </nav>
          <div>nav right</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UserListPage