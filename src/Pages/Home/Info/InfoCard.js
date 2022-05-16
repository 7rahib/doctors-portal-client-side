import React from 'react';

const InfoCard = ({ img, cardTitle, bgCard }) => {
    return (
        <div className={`p-3 card card-side shadow-xl ${bgCard}`}>
            <figure className='pl-5'><img src={img} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;