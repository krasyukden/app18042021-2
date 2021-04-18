import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
//import SidebarAll from "./components/SidebarAll/SidebarAll";// !!!

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/*<Route path="" render={() => <SidebarAll /*sidebarItem={props.state.sidebarAll.sidebarItem} />} />   // !!!
        {/*<Profile />*/}
        <div className="app-wrapper-content">
          <Route path='/dialogs'
            render={() => <DialogsContainer /*dialogs={props.state.dialogsPage.dialogs}*/
              //messages={props.state.dialogsPage.messages}
              //dispatch={props.dispatch}/>}
              //store={props.store} 
              />}/>
          <Route path='/users' render = {() => <UsersContainer/> }/>
          <Route path='/profile' render={() => 
          <Profile /*store= {props.store}*/ />} />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;


/*
const App = (props) => {




  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="" render={() => <SidebarAll sidebarItem={props.state.sidebarAll.sidebarItem} />} />
        {/*<Profile />/*
        <div className="app-wrapper-content">
          <Route path='/dialogs'
            render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages}
              addMessage={props.addMessage} 
              updateNewMessageText={props.updateNewMessageText}/>} />
          <Route path='/profile' render={() => <Profile 
          profilePage={props.state.profilePage} 
          addPost={props.addPost} 
          updateNewPostText={props.updateNewPostText}/>} />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  );
}*/