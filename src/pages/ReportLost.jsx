import Header from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';

export default function ReportLost() {
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // TODO: send to backend later. For now just simulate success:
    await new Promise(r => setTimeout(r, 300));
    navigate('/success');
  }

  return (
    <>
      <Header />
      <main className="container">
        <h2>Report a lost pet</h2>
        <form className="card form" onSubmit={onSubmit}>
          <div className="grid2">
            <label>Pet name<input name="name" required placeholder="Milo" /></label>
            <label>Species<select name="species" required>
              <option value="dog">Dog</option><option value="cat">Cat</option><option value="other">Other</option>
            </select></label>
            <label>Breed<input name="breed" placeholder="Labrador" /></label>
            <label>Color<input name="color" placeholder="Brown" /></label>
            <label>Last seen (date/time)<input type="datetime-local" name="lastSeenAt" required /></label>
            <label>Area / Address<input name="area" placeholder="Śródmieście, Warsaw" required /></label>
          </div>

          <label>Distinctive marks
            <textarea name="marks" rows="3" placeholder="Blue collar, white patch on chest"></textarea>
          </label>

          <label>Contact phone/email
            <input name="contact" required placeholder="+48 555 123 456 or email" />
          </label>

          <div className="row right gap">
            <button type="submit" className="btn primary">Publish</button>
          </div>
        </form>
      </main>
    </>
  );
}
