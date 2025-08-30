

// // // // // import { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // export default function Upload() {
// // // // //   const [file, setFile] = useState(null);
// // // // //   const nav = useNavigate();

// // // // //   async function onUpload() {
// // // // //     if (!file) return alert('Choose a .jac file first');
// // // // //     const fd = new FormData();
// // // // //     fd.append('file', file);
// // // // //     const r = await fetch('/api/upload', { method: 'POST', body: fd });
// // // // //     const j = await r.json().catch(() => ({}));
// // // // //     if (!r.ok || j.ok === false) {
// // // // //       alert(j.error || 'Upload failed');
// // // // //       return;
// // // // //     }
// // // // //     const u = new URLSearchParams({ jac_path: j.jac_path, task_name: j.task_name });
// // // // //     nav(`/console?${u.toString()}`);
// // // // //   }

// // // // //   return (
// // // // //     <div className="page">
// // // // //       <div className="bg-full"><img src="/img/bg_upload.jpg" alt="" /></div>
// // // // //       <div className="container">
// // // // //         <div className="card" style={{ maxWidth: 900 }}>
// // // // //           <h1 className="h1">📦 Upload & Run Jac</h1>
// // // // //           <div className="row" style={{ gap: 12 }}>
// // // // //             <input type="file" accept=".jac" onChange={e => setFile(e.target.files?.[0] || null)} />
// // // // //             <button className="btn" onClick={onUpload}>▶ Upload & Run</button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client"

// // // // import { useState } from "react"
// // // // import { useNavigate, Link } from "react-router-dom"
// // // // import "../styles/upload.css"

// // // // export default function Upload() {
// // // //   const [file, setFile] = useState(null)
// // // //   const [isDragging, setIsDragging] = useState(false)
// // // //   const nav = useNavigate()

// // // //   async function onUpload() {
// // // //     if (!file) return alert("Choose a .jac file first")
// // // //     const fd = new FormData()
// // // //     fd.append("file", file)
// // // //     const r = await fetch("/api/upload", { method: "POST", body: fd })
// // // //     const j = await r.json().catch(() => ({}))
// // // //     if (!r.ok || j.ok === false) {
// // // //       alert(j.error || "Upload failed")
// // // //       return
// // // //     }
// // // //     const u = new URLSearchParams({ jac_path: j.jac_path, task_name: j.task_name })
// // // //     nav(`/console?${u.toString()}`)
// // // //   }

// // // //   function handleDragOver(e) {
// // // //     e.preventDefault()
// // // //     setIsDragging(true)
// // // //   }

// // // //   function handleDragLeave(e) {
// // // //     e.preventDefault()
// // // //     setIsDragging(false)
// // // //   }

// // // //   function handleDrop(e) {
// // // //     e.preventDefault()
// // // //     setIsDragging(false)
// // // //     const files = e.dataTransfer.files
// // // //     if (files.length > 0) {
// // // //       setFile(files[0])
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="upload-container">
// // // //       <div className="background-effects">
// // // //         <div className="grid-overlay"></div>
// // // //         <div className="floating-particles"></div>
// // // //       </div>

// // // //       <div className="content-wrapper">
// // // //         <div className="upload-card">
// // // //           <h1 className="page-title">
// // // //             Select your <span className="highlight">JAC file</span> and watch it execute in real-time
// // // //           </h1>

// // // //           <div
// // // //             className={`drop-zone ${isDragging ? "dragging" : ""} ${file ? "has-file" : ""}`}
// // // //             onDragOver={handleDragOver}
// // // //             onDragLeave={handleDragLeave}
// // // //             onDrop={handleDrop}
// // // //           >
// // // //             <div className="drop-icon">📄</div>
// // // //             <div className="drop-text">
// // // //               {file ? (
// // // //                 <>
// // // //                   <strong>{file.name}</strong>
// // // //                   <span>Ready to upload</span>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <strong>Drop your JAC file here</strong>
// // // //                   <span>or click to browse</span>
// // // //                 </>
// // // //               )}
// // // //             </div>
// // // //             <input
// // // //               type="file"
// // // //               accept=".jac"
// // // //               onChange={(e) => setFile(e.target.files?.[0] || null)}
// // // //               className="file-input"
// // // //             />
// // // //           </div>

// // // //           <div className="action-buttons">
// // // //             <button className="btn btn-primary" onClick={onUpload} disabled={!file}>
// // // //               <span className="btn-icon">▶</span>
// // // //               Upload & Run
// // // //             </button>
// // // //             <Link to="/" className="btn btn-secondary">
// // // //               <span className="btn-icon">←</span>
// // // //               Back to Home
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // "use client"

// // // import { useState } from "react"
// // // import { useNavigate } from "react-router-dom"
// // // import "../styles/upload.css"

// // // export default function Upload() {
// // //   const [file, setFile] = useState(null)
// // //   const [isDragging, setIsDragging] = useState(false)
// // //   const nav = useNavigate()

// // //   async function onUpload() {
// // //     if (!file) return alert("Choose a .jac file first")
// // //     const fd = new FormData()
// // //     fd.append("file", file)
// // //     const r = await fetch("/api/upload", { method: "POST", body: fd })
// // //     const j = await r.json().catch(() => ({}))
// // //     if (!r.ok || j.ok === false) {
// // //       alert(j.error || "Upload failed")
// // //       return
// // //     }
// // //     const u = new URLSearchParams({ jac_path: j.jac_path, task_name: j.task_name })
// // //     nav(`/console?${u.toString()}`)
// // //   }

// // //   function handleDragOver(e) {
// // //     e.preventDefault()
// // //     setIsDragging(true)
// // //   }

// // //   function handleDragLeave(e) {
// // //     e.preventDefault()
// // //     setIsDragging(false)
// // //   }

// // //   function handleDrop(e) {
// // //     e.preventDefault()
// // //     setIsDragging(false)
// // //     const files = e.dataTransfer.files
// // //     if (files.length > 0) {
// // //       setFile(files[0])
// // //     }
// // //   }

// // //   return (
// // //     <div className="page">
// // //       <div className="bg-full">
// // //         <div className="bg-gradient"></div>
// // //       </div>
// // //       <div className="container">
// // //         <div className="card upload-card">
// // //           <div className="card-header">
// // //             <h1 className="h1">
// // //               Select your <span className="highlight">JAC file</span> and watch it execute in real-time
// // //             </h1>
// // //           </div>

// // //           <div
// // //             className={`drop-zone ${isDragging ? "dragging" : ""} ${file ? "has-file" : ""}`}
// // //             onDragOver={handleDragOver}
// // //             onDragLeave={handleDragLeave}
// // //             onDrop={handleDrop}
// // //           >
// // //             <div className="drop-icon">📄</div>
// // //             <div className="drop-text">
// // //               {file ? (
// // //                 <>
// // //                   <strong>{file.name}</strong>
// // //                   <br />
// // //                   <small>Ready to upload</small>
// // //                 </>
// // //               ) : (
// // //                 <>
// // //                   <strong>Drop your JAC file here</strong>
// // //                   <br />
// // //                   <small>or click to browse</small>
// // //                 </>
// // //               )}
// // //             </div>
// // //             <input
// // //               type="file"
// // //               accept=".jac"
// // //               onChange={(e) => setFile(e.target.files?.[0] || null)}
// // //               className="file-input"
// // //             />
// // //           </div>

// // //           <div className="button-row">
// // //             <button className="btn btn-primary" onClick={onUpload} disabled={!file}>
// // //               ▶ Upload & Run
// // //             </button>
// // //             <button className="btn btn-secondary" onClick={() => nav("/app")}>
// // //               ← Back to Home
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // "use client"

// // import { useState } from "react"
// // import { useNavigate } from "react-router-dom"
// // import "../styles/upload.css"

// // export default function Upload() {
// //   const [file, setFile] = useState(null)
// //   const [isDragging, setIsDragging] = useState(false)
// //   const nav = useNavigate()

// //   async function onUpload() {
// //     if (!file) return alert("Choose a .jac file first")
// //     const fd = new FormData()
// //     fd.append("file", file)
// //     const r = await fetch("/api/upload", { method: "POST", body: fd })
// //     const j = await r.json().catch(() => ({}))
// //     if (!r.ok || j.ok === false) {
// //       alert(j.error || "Upload failed")
// //       return
// //     }
// //     const u = new URLSearchParams({ jac_path: j.jac_path, task_name: j.task_name })
// //     nav(`/console?${u.toString()}`)
// //   }

// //   function handleDragOver(e) {
// //     e.preventDefault()
// //     setIsDragging(true)
// //   }

// //   function handleDragLeave(e) {
// //     e.preventDefault()
// //     setIsDragging(false)
// //   }

// //   function handleDrop(e) {
// //     e.preventDefault()
// //     setIsDragging(false)
// //     const files = e.dataTransfer.files
// //     if (files.length > 0) {
// //       setFile(files[0])
// //     }
// //   }

// //   return (
// //     <div className="page">
// //       <div className="bg-full">
// //         <div className="bg-gradient"></div>
// //       </div>
// //       <div className="container">
// //         <div className="card upload-card">
// //           <div className="card-header">
// //             <h1 className="h1">
// //               Select your <span className="highlight">JAC file</span> and watch it execute in real-time
// //             </h1>
// //           </div>

// //           <div
// //             className={`drop-zone ${isDragging ? "dragging" : ""} ${file ? "has-file" : ""}`}
// //             onDragOver={handleDragOver}
// //             onDragLeave={handleDragLeave}
// //             onDrop={handleDrop}
// //           >
// //             <div className="drop-icon">📄</div>
// //             <div className="drop-text">
// //               {file ? (
// //                 <>
// //                   <strong>{file.name}</strong>
// //                   <br />
// //                   <small>Ready to upload</small>
// //                 </>
// //               ) : (
// //                 <>
// //                   <strong>Drop your JAC file here</strong>
// //                   <br />
// //                   <small>or click to browse</small>
// //                 </>
// //               )}
// //             </div>
// //             <input
// //               type="file"
// //               accept=".jac"
// //               onChange={(e) => setFile(e.target.files?.[0] || null)}
// //               className="file-input"
// //             />
// //           </div>

// //           <div className="button-row">
// //             <button className="btn btn-primary" onClick={onUpload} disabled={!file}>
// //               ▶ Upload & Run
// //             </button>
// //             <button className="btn btn-secondary" onClick={() => nav("/app")}>
// //               ← Back to Home
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// import { useState } from "react";

// export default function Upload() {
//   const [file, setFile] = useState(null);
//   const [status, setStatus] = useState("");

//   const uploadFile = async () => {
//     if (!file) return;
//     const form = new FormData();
//     form.append("file", file);
//     const res = await fetch("http://127.0.0.1:8000/api/upload", { method: "POST", body: form });
//     const data = await res.json();
//     setStatus(JSON.stringify(data, null, 2));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen text-white">
//       <h1 className="text-2xl font-bold mb-4">Upload JAC File</h1>
//       <input type="file" accept=".jac" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={uploadFile} className="mt-4 px-6 py-2 bg-blue-600 rounded-lg">Upload & Run</button>
//       <pre className="mt-6 bg-gray-800 p-4 rounded-lg">{status}</pre>
//     </div>
//   );
// }

"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/upload.css"

export default function Upload() {
  const [file, setFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const nav = useNavigate()

  async function onUpload() {
    if (!file) return alert("Choose a .jac file first")
    const fd = new FormData()
    fd.append("file", file)
    const r = await fetch("/api/upload", { method: "POST", body: fd })
    const j = await r.json().catch(() => ({}))
    if (!r.ok || j.ok === false) {
      alert(j.error || "Upload failed")
      return
    }
    const u = new URLSearchParams({ jac_path: j.jac_path, task_name: j.task_name })
    nav(`/console?${u.toString()}`)
  }

  function handleDragOver(e) {
    e.preventDefault()
    setIsDragging(true)
  }

  function handleDragLeave(e) {
    e.preventDefault()
    setIsDragging(false)
  }

  function handleDrop(e) {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      setFile(files[0])
    }
  }

  return (
    <div className="page">
      <div className="bg-full">
        <div className="bg-gradient"></div>
      </div>
      <div className="container">
        <div className="card upload-card">
          <div className="card-header">
            <h1 className="h1">
              Select your <span className="highlight">JAC file</span> and watch it execute in real-time
            </h1>
          </div>

          <div
            className={`drop-zone ${isDragging ? "dragging" : ""} ${file ? "has-file" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="drop-icon">📄</div>
            <div className="drop-text">
              {file ? (
                <>
                  <strong>{file.name}</strong>
                  <br />
                  <small>Ready to upload</small>
                </>
              ) : (
                <>
                  <strong>Drop your JAC file here</strong>
                  <br />
                  <small>or click to browse</small>
                </>
              )}
            </div>
            <input
              type="file"
              accept=".jac"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="file-input"
            />
          </div>

          <div className="button-row">
            <button className="btn btn-primary" onClick={onUpload} disabled={!file}>
              ▶ Upload & Run
            </button>
            <button className="btn btn-secondary" onClick={() => nav("/app")}>
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
