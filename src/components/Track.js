import React from 'react';

const Track = ({chartPosition, title, artist, image, preview}) => {

    return (
        <li>
            <h2>{chartPosition}</h2>
            <img src={image} alt="Track/artist image" height="130px"/>
            <div className="track-details">
                <h3 className="title">{title}</h3>
                <p className="artist">{artist}</p>
                <audio controls>
                    <source src={preview}
                    type="audio/x-m4a"/>
                    Your browser does not support audio preview.
                </audio>
            </div>
        </li>
    )
}

export default Track;