import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";

import Player from "../components/Player";
import Card from "../components/Card";

export default function Home() {
	const [videosData, setVideosData] = useState();
	const [isFetching, setIsFetching] = useState();
	const [currentVideo, setCurrentVideo] = useState({});

	useEffect(() => {
		getVideos();
	}, []);

	async function getVideos() {
		setIsFetching(true);
		try {
			const response = await axios.get("/api/getVideosData");
			setVideosData(response.data.data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsFetching(false);
		}
	}

	/* const handleSetCurrentVideo = (obj) => {
		setCurrentVideo(obj);
	}; */

	return (
		<div className={styles.container}>
			{videosData ? (
				<>
				 {/* {currentVideo.url ? 	<Player currentVideo={currentVideo} /> : null} */}
				 <Player videosData={videosData} />
				 {/* <Player currentVideo={currentVideo} /> */}
					{/* <ul className={styles.videos}>
						{videosData.map((data, i) => {
							return (
								<li key={i}>
									<Card data={data} setCurrentVideo={handleSetCurrentVideo}>
										<p>Video {i + 1}</p>
									</Card>
								</li>
							);
						})}
					</ul> */}
				</>
			) : (
				""
			)}
		</div>
	);
}
