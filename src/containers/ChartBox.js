import React, {useState, useEffect} from 'react';
import TrackList from '../components/TrackList';

const ChartBox = () => {

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetchTracks();
    }, [])

    const fetchTracks = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(data => setTracks(data.feed.entry));
    }

    return (
        <>
        <h1>CHARTBOX</h1>
        <TrackList tracks={tracks}/>
        </>
    )
}

export default ChartBox;