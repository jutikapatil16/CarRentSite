import React from 'react'

function DefaultLayout(props) {
  return (
    <div>
      {/* Navbar */}
      <div className="header">
        <div className="d-flex justify-content-between">
        <h1>Sheycars</h1>
        <button>User</button>
        </div>
      </div>
      {/* content */}
      <div className="content">
       {props.children}
      </div>

    </div>
  )
}

export default DefaultLayout
