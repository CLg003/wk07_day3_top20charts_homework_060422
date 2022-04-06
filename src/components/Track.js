import React from 'react';

const Track = ({title, artist}) => {


    return (
        <li>
            <h3>{title}</h3>
            <p>{artist}</p>
        </li>
    )
}

export default Track;