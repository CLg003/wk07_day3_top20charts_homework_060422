import React from 'react';
import Track from './Track';


const TrackList = ({tracks}) => {

    const trackNodes = tracks.map((track, index) => {
        return <Track key={index} chartPosition={Number(index) + 1} title={track['im:name'].label} artist={track['im:artist'].label} image={track['im:image'][2].label} preview={track.link[1].attributes.href}/>
    });

    return (
        <ol>
            {trackNodes}
        </ol>
    );
}

export default TrackList;