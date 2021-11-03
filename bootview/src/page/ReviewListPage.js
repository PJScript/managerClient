import React from 'react'
import Side from '../component/side'
import Header from '../component/header'
const ReviewListPage = () => {
  return (
    <div className="App">
      <Side />
      <div className='App-centerContainer'>
        <Header />
        <div className='App-centerInner'>
          <h3>리뷰 관리 페이지</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">글 제목</th>
                <th scope="col">글 내용</th>
                <th scope="col">작성자</th>
                <th scope="col">작성일</th>
                <th scope="col">관리 옵션</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td className="hover">Mark</td>
                <td className="hover">Otto ...</td>
                <td className="hover">@mdo</td>
                <td>오늘</td>
                <td>
                  <span className="hover">삭제 /</span>
                  <span className="hover">검토 /</span>
                  <span className="hover">이동</span>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td className="hover">Jacob</td>
                <td className="hover">Thornton ...</td>
                <td className="hover">@fat</td>
                <td>어제</td>
                <td>
                  <span className="hover">삭제 /</span>
                  <span className="hover">검토 /</span>
                  <span className="hover">이동</span>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td className="hover">Larry the Bird</td>
                <td className="hover">test ...</td>
                <td className="hover">@twitter</td>
                <td>어제</td>
                <td>
                  <span className="hover">삭제 /</span>
                  <span className="hover">검토 /</span>
                  <span className="hover">이동</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ReviewListPage