import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'


export default function Player( { currentVideo } ) {
  const videoRef = useRef("")
  const cldRef = useRef()
  const  url = currentVideo.url
  useEffect(() => {
    if(!cldRef.current){
      cldRef.current= window.cloudinary.Cloudinary.new({ cloud_name: "ddmm5ofs1"});
    }
    
  }, [])
  useEffect(() => {
    if(currentVideo.url){
      const player = cldRef.current.videoPlayer(videoRef.current.id)
      console.log(player)
      player.source("http://res.cloudinary.com/ddmm5ofs1/video/upload/v1586458304/samples/elephants.mp4")
      
    }
   return ()=>{player = null}
  }, [currentVideo])


  return (
    <div className={styles.player}>
       {currentVideo.url ? <video
        id="example-player" 
        ref={videoRef}
        controls
        data-cld-public-id="samples/elephants"
        /* data-cld-public-id={currentVideo?.public_id} */
        className ="cld-video-player cld-video-player-skin-dark">
      </video> : <h3>Select a video</h3>}

    </div>
  )

}
