import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Pick a game mode</h1>
      <div className="button-container">
        <button>
          <Link to="classic">Classic</Link>
        </button>
        <button>Classic (2 minutes)</button>
        <button>Classic (3 minutes)</button>
        <button>Till you miss</button>
      </div>
    </>
  )
}
