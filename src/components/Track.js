import React from 'react';

const Track = ({title, artist, image, preview}) => {


    return (
        <li>
            <img src={image} alt="Track/artist image" height="130px"/>
            <div className="track-details">
                <h3>{title}</h3>
                <p>{artist}</p>
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