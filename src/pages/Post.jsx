import Header from '../components/Header.jsx';
import { useParams, Link } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();
  // TODO: fetch by id
  return (
    <>
      <Header />
      <main className="container">
        <div className="row between center">
          <h2>Report #{id}</h2>
          <Link to="/browse" className="btn">← Back</Link>
        </div>
        <div className="card">
          <p><strong>Status:</strong> Lost</p>
          <p><strong>Pet:</strong> Dog, brown</p>
          <p><strong>Area:</strong> Śródmieście</p>
          <p><strong>Contact:</strong> +48 555 123 456</p>
        </div>
      </main>
    </>
  );
}
