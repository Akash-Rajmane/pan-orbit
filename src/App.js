import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Posts from "./pages/posts/Posts";
import Gallery from "./pages/gallery/Gallery";
import Todo from "./pages/todo/Todo";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import { useEffect, useState } from "react";
import { UserProvider } from "./context/user";
import ChatBox from "./components/chatbox/ChatBox";
import MessageBox from "./components/chatbox/MessageBox";

function App() {
  return (
    <Router>
      <UserProvider>
        <Wrapper />
      </UserProvider>
    </Router>
  );
}

export default App;

const Wrapper = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [showMsgBox, setShowMsgBox] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location]);

  return (
    <>
      {!show ? (
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      ) : (
        <div className="container">
          <aside>
            <SideBar />
          </aside>
          <section className="content">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/profile/:name" element={<Profile />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/todo" element={<Todo />} />
              </Routes>
              <ChatBox setShowMsgBox={setShowMsgBox} showMsgBox={showMsgBox} />
              {showMsgBox && <MessageBox setShowMsgBox={setShowMsgBox} />}
            </main>
          </section>
        </div>
      )}
    </>
  );
};
