import React from 'react';

const Track = ({title, artist}) => {


    return (
        <li>
            <h3 className="track-details">{title}</h3>
            <p className="track-details">{artist}</p>
        </li>
    )
}

export default Track;