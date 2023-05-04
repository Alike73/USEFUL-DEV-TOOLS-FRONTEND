import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Loader from '../Loader/Loader';

const TutorialItem = ({ tutorial }) => {
    
    const playlistId = tutorial.videoIdLink; // Replace with your YouTube playlist ID

    const [isLoading, setIsLoading] = useState(true);
    const [showVideo, setShowVideo] = useState(false);

    const opts = {
        height: '225',
        width: '100%',
        playerVars: {
            autoplay: 0,
            listType: 'playlist', // set the listType to playlist
            list: playlistId, // set the playlist ID
        },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setShowVideo(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const onPlayerReady = (event) => {
        // Remove this line to prevent video playback on page load
        // event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
        if (event.data === 0) {
            event.target.nextVideo();
        }
    };
    
    return (
        <div className="col">
            <div className="tutorialCard">
                {isLoading && <Loader />}
                {showVideo && <YouTube className="" videoId={null} opts={opts} onReady={onPlayerReady} onStateChange={onPlayerStateChange} />}
                <div className="tutorial-card-body pt-3">
                    <h5 className="text-center tutorialCardText">{tutorial.title}</h5>
                    <p className="tutorialCardText">{tutorial.description}</p>
                    <div className='w-100 d-flex justify-content-end'>
                        <i className="bi bi-person-video3 fs-5 me-3"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorialItem;
