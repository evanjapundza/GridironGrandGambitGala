import React, { useState, useEffect } from "react";
import { fetchLeague } from "../../Sleeper-API-Service";

export default function Home() {

    const [leagueInfo, setLeagueInfo] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedLeague = await fetchLeague();
                console.log(fetchedLeague)
                setLeagueInfo(fetchedLeague);
            } catch (error) {
                console.error('Error fetching classrooms:', error);
            } finally {

            }

        };

        fetchData();
    }, []);

    return (
        <div>
            {leagueInfo ? (
                <div>
                    {Object.entries(leagueInfo).map(([key, value]) => (
                        <div key={key}>
                            <strong>{key}:</strong> {value.metadata.team_name} : {value.display_name}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}