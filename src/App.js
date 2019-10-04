import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';

function App(props) {
  let pProfile = () => <Profile state={props.state.profile} actions={props.actions.posts}/>;
  let pMessages = () => <Messages state={props.state.messages} actions={props.actions.messages}/>;

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div class="content">
        <Route path='/profile' render={pProfile} />
        <Route path='/messages' render={pMessages} />
      </div>
      <Footer />
    </div>
  );
}

export default App;