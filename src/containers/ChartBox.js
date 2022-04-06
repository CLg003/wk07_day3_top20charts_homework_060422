import React, {useState, useEffect} from 'react';
import './ChartBox.css';
import ChartGenreSelect from '../components/ChartGenreSelect';
import TrackList from '../components/TrackList';

const ChartBox = () => {

    const genres = [
        {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
        {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
        {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
        {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
    ];

    const [tracks, setTracks] = useState([]);

    const [genre, setGenre] = useState({});

    const onGenreSelected = (genre) => {
        setGenre(genre);
    }

    useEffect(() => {
        fetchTracks();
    }, [genre])

    const fetchTracks = (genre) => {
        (genre ? fetch(genre.url) : fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json"))
        .then(response => response.json())
        .then(data => setTracks(data.feed.entry));
    }

    return (
        <div id="chartbox">
            <h1>ChartBox</h1>
            <div id="genre">
                {/* { genre.name="All" ? <h2>Top 20</h2> : <h2>Top 20 - {genre.name}</h2>} */}
                <h2>{genre.name}</h2>
                <ChartGenreSelect genres={genres} onGenreSelected={onGenreSelected}/>
            </div>
            <TrackList tracks={tracks}/>
        </div>
    )
}

export default ChartBox;