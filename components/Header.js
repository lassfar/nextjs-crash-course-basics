import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', padding: '2rem', backgroundColor: '#000', color: '#fff'}}>
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
    </div>
  )
}

export default Header
