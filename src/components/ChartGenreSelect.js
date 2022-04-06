import React from 'react';

const ChartGenreSelect = ({genres, onGenreSelected}) => {

    const genreOptions = genres.map((genre, index) => {
        return (
            <option value={index} key={index}>{genre.name}</option>
        );
    })

    const handleChangeGenre = (event) => {
        // event.preventDefault();
        const genreChosen = genres[event.target.value];
        console.log(genreChosen);
        onGenreSelected(genreChosen);
    }

    return (
        <select id="select" value="" onChange={handleChangeGenre}>
            <option defaultValue="" >Select chart genre</option>
            {genreOptions}
        </select>
    )
}

export default ChartGenreSelect;