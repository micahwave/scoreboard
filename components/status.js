import React from 'react';

export const formatTime = (str, timeZone) => {
    return str;
};

const Status = ({ state, gameId, dateTimeUtc, timeZone, callLetters }) => {
    return (
        <div>
            {
                'final' === state.toLowerCase()
                ?
                <span>Final <a href={gameId}>Box</a></span>
                :
                <span>{callLetters} {formatTime(dateTimeUtc, timeZone)}</span>
            }
        </div>
    )
};

export default Status;