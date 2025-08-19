import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="pf-header">
      <Link to="/" className="brand">🐾 petFound Warsaw</Link>
      <nav>
        <NavLink to="/browse" className="nav">Browse</NavLink>
        <NavLink to="/report-lost" className="btn primary">Report Lost</NavLink>
        <NavLink to="/report-found" className="btn">Report Found</NavLink>
      </nav>
    </header>
  );
}
