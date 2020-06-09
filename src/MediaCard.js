import React from 'react';
import image from './AdilAltaf.jpg';

const MediaCard = ( { title, body, imageURL, altText }) =>
    <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={image} alt={altText} />
    </div>;

export default MediaCard;