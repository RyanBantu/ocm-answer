import React from 'react';
import vid from "./vidm/3.mov"

const Movie = () => {
    return (
        <div class="flex w-28 h-20">
            <video className='ryan' src={vid} autoPlay loop muted />
        </div>
    )
}

export default Movie;