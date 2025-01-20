import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import CreatePost from './pages/CreatePost';
import Home from "./pages/Home";
import { routhPath } from './routes/Route';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = {routhPath.home} element={<Home />} />
        <Route path = {routhPath.create} element={<CreatePost />} />
        <Route path={routhPath.posts} element={<AllPosts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
