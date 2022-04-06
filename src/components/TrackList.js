import React from 'react';
import Track from './Track';


const TrackList = ({tracks}) => {

    // const changeToNumber = (index) => {
    //     return Number(index) + 1;
    // }

    const trackNodes = tracks.map((track, index) => {
        return <Track key={index} title={track['im:name'].label} artist={track['im:artist'].label}/>
    });

    return (
        <ol>
            {trackNodes}
        </ol>
    );
}

export default TrackList;