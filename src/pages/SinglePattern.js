import React from 'react';
import { config } from '../../src/constants';

const url = config.url.apiUrl;

const SinglePattern = ({ pattern }) => {
    return (
        <div className="dialog">
            <h2>{pattern.brand} {pattern.number}</h2>
            <img src={`${url}/${pattern.patternFrontPic}`} alt="Front Pic"/>
            <img src={`${url}/${pattern.patternBackPic}`} alt="Back Pic"/>
        </div>
    );
}

export default SinglePattern;
