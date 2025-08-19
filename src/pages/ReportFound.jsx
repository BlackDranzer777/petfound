import Header from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';

export default function ReportFound() {
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await new Promise(r => setTimeout(r, 300));
    navigate('/success');
  }

  return (
    <>
      <Header />
      <main className="container">
        <h2>Report a found pet</h2>
        <form className="card form" onSubmit={onSubmit}>
          <div className="grid2">
            <label>Species<select name="species" required>
              <option value="dog">Dog</option><option value="cat">Cat</option><option value="other">Other</option>
            </select></label>
            <label>Approx. breed<input name="breed" placeholder="(if known)" /></label>
            <label>Color<input name="color" /></label>
            <label>Found at (date/time)<input type="datetime-local" name="foundAt" required /></label>
            <label>Area / Address<input name="area" required placeholder="Mokotów, Warsaw" /></label>
            <label>Temp care? <select name="care"><option>Yes</option><option>No</option></select></label>
          </div>
          <label>Notes<textarea name="notes" rows="3" placeholder="Collar color, friendly/shy, microchip?"></textarea></label>
          <label>Your contact<input name="contact" required placeholder="+48 555 123 456 or email" /></label>
          <div className="row right gap"><button className="btn primary">Publish</button></div>
        </form>
      </main>
    </>
  );
}
