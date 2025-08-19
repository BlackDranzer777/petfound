import Header from './components/Header.jsx';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <main className="container hero">
        <h1>Find lost pets faster in Warsaw</h1>
        <p className="muted">
          Post a lost or found pet, browse nearby reports, and get matched quickly.
        </p>
        <div className="row gap">
          <Link to="/report-lost" className="btn xl primary">I lost a pet</Link>
          <Link to="/report-found" className="btn xl">I found a pet</Link>
          <Link to="/browse" className="btn xl ghost">Browse reports</Link>
        </div>
      </main>
    </>
  );
}
