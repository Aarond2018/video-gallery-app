import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'


export default function Player( { videosData } ) {
  const videoRef = useRef("")
  const cldRef = useRef()

  const data = videosData.map(x => x.public_id)

  
 
  useEffect(() => {
    if(!cldRef.current){
      cldRef.current= window.cloudinary.Cloudinary.new({ cloud_name: "ddmm5ofs1"});
    }

    if(videosData){
      const player = cldRef.current.videoPlayer(videoRef.current.id, {
        playlistWidget: {
          direction: 'horizontal',
          total: data?.length
      }})
      player.playlist(data, { autoAdvance: true, repeat: true, presentUpcoming: 3 })

      
    }
  }, [videosData])


  return (
    <div className={styles.player}>
    <video
        id="example-player" 
        ref={videoRef}
        controls
        className ="cld-video-player cld-video-player-skin-dark">
      </video>
    </div>
  )

}
