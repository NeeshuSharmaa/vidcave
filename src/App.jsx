import { Route, Routes } from "react-router";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Home from "./pages/home/Home";
import Playlist from "./pages/playlist/Playlist";
import WatchLater from "./pages/watchLater/WatchLater";
import Video from "./pages/video/Video";
import Category from "./pages/category/Category";
import Explore from "./pages/explore/Explore";
import Playlists from "./pages/playlists/Playlists";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/videos/:id" element={<Video />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlist/:playlistId" element={<Playlist />} />
          <Route path="/watch-later" element={<WatchLater />} />
        </Routes>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
