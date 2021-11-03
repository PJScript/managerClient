import React from 'react'
import { Link } from 'react-router-dom'
const Side = () => {
  return (
    <div className='sideListContainer'>
      <a href='/home'><button>홈</button></a>
      <ul className='sideListInner first'>
        <h6 className='sideList-item title'>유저 관리</h6>
        <li>
          <Link to='/user'>
            <div className='sideList-item hover'>User List</div>
          </Link>
        </li>
        <li>
          <Link to='/review'>
            <div className='sideList-item hover'>Review List</div>
          </Link>
        </li>
        <li>
          <Link to='/chat'>
            <div className='sideList-item hover'>Chat Room</div>
          </Link>
        </li>
        <li>
          <div className='sideList-item hover'>Setting</div>
        </li>
      </ul>
      <ul className='sideListInner second'>
        <h6 className='sideList-item title'>트래픽 관리</h6>
        <li>
          <div className='sideList-item hover'>example1</div>
        </li>
        <li>
          <div className='sideList-item hover'>example2</div>
        </li>
        <li>
          <div className='sideList-item hover'>example3</div>
        </li>
        <li>
          <div className='sideList-item hover'>example4</div>
        </li>
      </ul>
      <ul className='sideListInner third'>
        <h6 className='sideList-item title'>서비스 관리</h6>
        <li>
          <div className='sideList-item hover'>example5</div>
        </li>
        <li>
          <div className='sideList-item hover'>example6</div>
        </li>
        <li>
          <div className='sideList-item hover'>example7</div>
        </li>
        <li>
          <div className='sideList-item hover '>example8</div>
        </li>
      </ul>
    </div>
  )
}

export default Side