import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Pick a game mode</h1>
      <div className="button-container">
        <button>
          <Link to="classic">Classic</Link>
        </button>
        <button>
          <Link to="classic2min">Classic (2 minutes)</Link>
        </button>
        <button>
          <Link to="classic3min">Classic (3 minutes)</Link>
        </button>
        <button>Till you miss</button>
      </div>
    </>
  )
}
