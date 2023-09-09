import React from 'react'
import AppNav from '../components/AppNav'
import Sidedbar from '../components/Sidedbar'
import styles from './AppLayout.module.css'
import Map from '../components/Map'
import User from '../components/User'

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidedbar />
      <Map />
      <User/>
    </div>
  )
}

export default AppLayout