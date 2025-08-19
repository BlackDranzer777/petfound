import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom';

const MOCK = [
  { id: 1, type: 'lost', name: 'Milo', species: 'dog', area: 'Śródmieście', color: 'Brown', when: '2h ago' },
  { id: 2, type: 'found', name: 'Unknown', species: 'cat', area: 'Wola', color: 'Black', when: 'Today' },
];

export default function Browse() {
  return (
    <>
      <Header />
      <main className="container">
        <h2>Browse reports</h2>
        <div className="row gap wrap">
          {MOCK.map(x => (
            <Link key={x.id} to={`/post/${x.id}`} className="card card-link">
              <div className="badge" data-variant={x.type}>{x.type}</div>
              <h3 className="tight">{x.name} <span className="muted">· {x.species}</span></h3>
              <div className="muted">{x.area} • {x.color} • {x.when}</div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
