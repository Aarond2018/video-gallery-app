import React from 'react'

import styles from '../styles/Home.module.css'

export default function Card({ data, setCurrentVideo , children }) {

  const thumbnailImage = data.url.replace(/\.\w+$/, ".jpg");

  return (
    <>
      <div className={styles["play-overlay"]}>
        <button onClick={() => setCurrentVideo(data)}>Play Video</button>
      </div>
      <img src={thumbnailImage} alt=""></img>
      <span className={styles.span}> {children} </span>
    </>
  )
}
