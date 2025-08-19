import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="card center">
          <h2>404</h2>
          <p className="muted">Page not found.</p>
          <Link to="/" className="btn">Go home</Link>
        </div>
      </main>
    </>
  );
}
