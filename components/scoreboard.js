import React, { useEffect, useState } from 'react';
import Game from '../components/game';

const Scoreboard = ({ rsnName, timeZone }) => {
    const [games, setGames] = useState([]);
    const getData = async () => {
        const response = await fetch(`https://stats.nbcsports.com/rsn/scoreboard?rsnName=${encodeURIComponent(rsnName)}`);
        const data = await response.json();

        setGames(data.scoreboard);
    };

    useEffect(() => {
        getData();
    });

    return (
        <div>
            <h1>Scoreboard</h1>
            {
                games.map((game, i) => {
                    return (
                        <Game
                            key={i}
                            timeZone={timeZone}
                            {...game}
                        />
                    );
                })
            }
        </div>
    )
};

export default Scoreboard;