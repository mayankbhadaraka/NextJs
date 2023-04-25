import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
            <h1>My List</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/Test">MyList</Link>

      </nav>
    </div>
  )
}

export default Navbar
