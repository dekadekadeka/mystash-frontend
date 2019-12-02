import React from 'react';

const SinglePattern = ({pattern}) => {
    const GENERIC_FRONT = "http://localhost:3000/generic_front.jpg"
    const GENERIC_BACK = "http://localhost:3000/generic_back.jpg"

    const frontPic = 
    pattern.front_pic === null ? GENERIC_FRONT : pattern.front_pic
    const backPic = 
    pattern.back_pic === null ? GENERIC_BACK : pattern.back_pic

    return (
        <div className="dialog">
            <h2>{pattern.brand} {pattern.number}</h2>
            <img src={frontPic} alt="Front Pic"/>
            <img src={backPic} alt="Back Pic"/>
        </div>
    );
}

export default SinglePattern;
