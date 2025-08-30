"use client"

import { Link } from "react-router-dom"
import { useEffect } from "react"
import "../styles/landing.css"

export default function Landing() {
  useEffect(() => {
    document.title = "JAC Web — Execute with Style"
  }, [])

  return (
    <div className="page" data-bg="landing">
      <div className="bg-image"></div>
      <div className="bg-vignette"></div>
      <div className="net-lines"></div>
      <div className="floating-orbs"></div>

      <header className="topnav glass">
        <div className="brand">
          <span className="logo">⚡</span> JAC Web
        </div>
        <nav>
          <Link className="nav-link" to="/app">
            Home
          </Link>
          <Link className="nav-link" to="/upload">
            Upload
          </Link>
          <Link className="nav-link" to="/console">
            Console
          </Link>
        </nav>
      </header>

      <section className="hero-wrap">
        <div className="hero-card elevate bounce-in">
          <h1 className="display">
            Execute your <span className="grad-text">JAC files</span> with style.
          </h1>
          <p className="lead">
            Upload, run, and monitor your code execution in a beautiful, modern interface designed for developers.
          </p>
          <div className="cta-row">
            <Link to="/upload" className="btn btn-hero">
              <span>📁</span> Upload & Run
            </Link>
            <Link to="/console" className="btn btn-ghost">
              <span>💻</span> Console
            </Link>
            <Link to="/app" className="btn btn-ghost">
              <span>🎮</span> Play RPG
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer glass">
        <div>Lightning Fast • Precise Control • Built for Developers</div>
      </footer>
    </div>
  )
}
