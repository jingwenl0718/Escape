import './App.css';
import Home from './views/Home';
import SearchPage from './views/SearchPage';
import { Routes, Route } from 'react-router-dom';
import CreateStay from './views/CreateStay';
import EditStay from './views/EditStay';
import FakeDashboard from './views/FakeDashboard';
import Login_Host from './views/Login_Host';
import Register_Host from './views/Register_Host';
import HostDashboard from './views/HostDashboard';
import DisplayOneStay from './views/DisplayOneStay';
import io from 'socket.io-client';
import ChatHome from './views/ChatHome'
import Chat from './views/Chat'

const socket = io.connect('http://localhost:8000');

function App() {
  return (
    <div className="App">
      <Routes>
          <Route element={<FakeDashboard />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<ChatHome socket = {socket}/>} path="/chatHome" />
          <Route element={<Chat socket = {socket}/>} path="/chat" />
          <Route element={<SearchPage />} path="/search/" />
          <Route element={<CreateStay />} path="/create/:hostId" />
          <Route element={<EditStay />} path="/edit/:hostId/:stayId" />
          <Route element={<DisplayOneStay />} path="/display/one/:stayId" />
          <Route element={<Register_Host />} path="/register/host" />
          <Route element={<Login_Host />} path="/login/host" />
          <Route element={<HostDashboard />} path="/dashboard/host/:id" />
      </Routes>
    </div>
  );
}

export default App;
