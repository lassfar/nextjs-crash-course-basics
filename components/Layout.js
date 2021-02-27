import React from 'react'
import Header from './Header'
import MyHead from './MyHead'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <MyHead />
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
