import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// We’ll import other pages as we create them

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}
