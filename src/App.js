import './App.css';
import SideBar from './components/sidebar/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Posts from './pages/posts/Posts';
import Gallery from './pages/gallery/Gallery';
import Todo from "./pages/todo/Todo";
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <aside>
          <SideBar/>
          </aside>
          <section className='content'>
            <Header/>
            <main className='main-content'>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/posts" element={<Posts/>} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/todo" element={<Todo/>} />
            </Routes>
            </main>
          </section>
          
         
        
     
      </div>
      </Router>
      
    </div>
  );
}

export default App;
