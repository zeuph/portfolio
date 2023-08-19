import React from 'react'
import classes from '../../styles/shared/Layout.module.css'
import { MainNavigation } from './MainNavigation'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className={classes.main}>
      <MainNavigation />
      <main className={classes.container}>{props.children}</main>
    </div>
  )
}

export default Layout
