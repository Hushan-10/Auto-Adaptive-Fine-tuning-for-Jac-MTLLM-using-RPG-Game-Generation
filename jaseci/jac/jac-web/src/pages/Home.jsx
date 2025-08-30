"use client"
import { useState } from "react"      
import { Link } from "react-router-dom"
import "../styles/home.css"




async function onPlayRPG() {
  try {
    const r = await fetch("/api/rpg/run", { method: "POST" })
    const j = await r.json().catch(() => ({}))
    if (!r.ok || j.ok === false) throw new Error(j.error || "launch failed")
    // Do not navigate: pygame window will pop up separately.
  } catch (e) {
    alert("RPG launch failed")
  }
}

export default function Home() {
  const [exited, setExited] = useState(false)

  function exitApp() {
    fetch("/api/shutdown", { method: "POST" }).catch(() => {})
    window.open("", "_self"); window.close()
    setExited(true)   // if window couldn't close, show overlay
  }
  return (
    <div className="page">
      <div className="bg-full">
        <div className="bg-gradient"></div>
      </div>
      <div className="container">
        {!exited && (
        <div className="card">
          <div className="card-header">
            <h1 className="h1">⚡ JARVIS
(Jac Auto-adaptive RPG & Versatile Intelligent System)</h1>
            <p className="subtitle">Choose your action</p>
          </div>

          <div className="stack center" style={{ marginTop: "2rem" }}>
            <button className="btn btn-primary" style={{ maxWidth: 560, width: "100%" }} onClick={onPlayRPG}>
              🎮 Play RPG Game
            </button>

            <Link className="btn btn-secondary" style={{ maxWidth: 560, width: "100%" }} to="/upload">
              📂 Run Your JAC File
            </Link>

            <Link className="btn btn-ghost" style={{ maxWidth: 560, width: "100%" }} to="/console">
              💻 Open Console
            </Link>

            <button className="btn btn-danger" style={{ width: 240 }} onClick={exitApp}>
              ❌ Exit
            </button>
          </div>
        </div>
        )}
        {exited && (
          <div className="overlay-exit">
            <h2> 👋 👋EXIT from JAC</h2>
            <p>You can now safely close this tab</p>
          </div>
        )}
      </div>
    </div>
  )
}
