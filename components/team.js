import React from 'react';

const Team = ({ name, score, result }) => {
    return (
        <div className="team">
            <div className="logo"></div>
            <div className="team">{name}</div>
            <div className="score">
                {score}
                {
                    'Win' === result &&
                    <span>W</span>
                }
            </div>
            <div className="record"></div>
        </div>
    );
};

Team.defaultProps = {}

export default Team;