import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form name="beta" method="POST" data-netlify="true" action="/success">
        <input type="hidden" name="form-name" value="beta" />
        <p style={{display:"none"}}><label>Don’t fill this: <input name="bot-field" /></label></p>

        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:16}}>
          <input name="name" placeholder="Your name" required style={{flex:"1 1 200px",padding:10}} />
          <input name="email" type="email" placeholder="Email" required style={{flex:"1 1 220px",padding:10}} />
          <button type="submit" style={{padding:"10px 16px"}}>Join beta</button>
        </div>

        <small style={{display:"block",marginTop:8,opacity:.7}}>
          We’ll only use your email for PetFound updates. No spam. 🐾
        </small>
      </form>
    </>
  )
}

export default App
