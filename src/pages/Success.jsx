import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="card center">
          <h2>You're on the list 🎉</h2>
          <p className="muted">Thanks! Your report has been submitted.</p>
          <div className="row gap">
            <Link to="/browse" className="btn">Browse reports</Link>
            <Link to="/" className="btn primary">Home</Link>
          </div>
        </div>
      </main>
    </>
  );
}
