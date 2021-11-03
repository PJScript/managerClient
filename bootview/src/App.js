import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import adminHome from './page/adminHome';
import Side from './component/side';
import LoginPage from './page/loginPage';
import Header from './component/header';
import AdminHome from './page/adminHome'
import UserListPage from './page/userListPage';
import ReviewListPage from './page/ReviewListPage';
import ChatRoomPage from './page/chatRoomPage';
import SettingPage from './page/settingPage';
function App() {
  return (
    <Router>  {/** 관리자 페이지 무단 침입을 막기위해 이중으로 라우팅 **/}
      <Switch>
        <Route exact path='/home' component={() => {
          return (
            <div className="App">
              <Side />
              <div className='App-centerContainer container'>
                <Header />
                <div className='App-centerInner container'>
                  <AdminHome />
                </div>
              </div>
            </div>
          )
        }} />
        <Route exact path='/' component={LoginPage} />
        <Route path='/user' component={UserListPage} />
        <Route path='/review' component={ReviewListPage} />
        <Route path='/chat' component={ChatRoomPage} />
        <Route path='/setting' component={SettingPage} />
      </Switch>
    </Router>

  );
}

export default App;
