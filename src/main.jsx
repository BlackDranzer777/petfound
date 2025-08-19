import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ReportLost from './pages/ReportLost.jsx';
import ReportFound from './pages/ReportFound.jsx';
import Browse from './pages/Browse.jsx';
import Post from './pages/Post.jsx';
import Success from './pages/Success.jsx';
import NotFound from './pages/NotFound.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/report-lost" element={<ReportLost />} />
      <Route path="/report-found" element={<ReportFound />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
