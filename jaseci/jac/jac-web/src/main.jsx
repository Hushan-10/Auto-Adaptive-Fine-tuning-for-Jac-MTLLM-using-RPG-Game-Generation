import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Upload from "./pages/Upload.jsx"
import Console from "./pages/Console.jsx"
import Landing from "./pages/Landing.jsx"
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/console" element={<Console />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
