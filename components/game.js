import React from 'react';
import Team from '../components/team';
import Status from '../components/status';

const Game = ({
    homeAbbr,
    homeScore,
    homeResult,
    awayAbbr,
    awayScore,
    awayResult,
    gameState,
    gameGlobalId,
    gameDateTimeUtc,
    timeZone,
    stationCallLetters
}) => {
    return (
        <div className="game">
            <Team name={awayAbbr} score={awayScore} result={awayResult} />
            <Team name={homeAbbr} score={homeScore} result={homeResult} />
            <Status state={gameState} gameId={gameGlobalId} dateTimeUtc={gameDateTimeUtc} callLetters={stationCallLetters} timeZone={timeZone} />
            <hr/>
        </div>
    );
};

export default Game;