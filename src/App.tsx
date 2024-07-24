import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Employees } from './pages/Employees';

import './index.scss';
import { PostList } from './pages/PostsList';
import { CommentsList } from './pages/CommentsList';
import { Profile } from './pages/Profile';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/comments" element={<CommentsList />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;