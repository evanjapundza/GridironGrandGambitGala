import React, { useState, useEffect } from "react";
import { fetchDraftPicks, fetchUser } from "../../Sleeper-API-Service";
import DraftPicks from "../../components/DraftPicks";
import Tabs from "../../components/Tabs";

export default function Home() {
    const [draftPicks, setDraftPicks] = useState([]);
    const [userMap, setUserMap] = useState({}); // Store user information

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the draft picks first
                const fetchedDraftPicks = await fetchDraftPicks();
                setDraftPicks(fetchedDraftPicks);

                // Extract unique user IDs from the draft picks
                const uniqueUserIds = [...new Set(fetchedDraftPicks.map(pick => pick.picked_by))].filter(Boolean);

                // Fetch user info for each unique user ID
                const userPromises = uniqueUserIds.map(async (userId) => {
                    const userInfo = await fetchUser(userId);
                    return { 
                        userId, 
                        displayName: userInfo.display_name, 
                        avatar: userInfo.avatar 
                    };
                });

                // Wait for all user API calls to complete
                const userData = await Promise.all(userPromises);

                // Create a map of user_id to display name and avatar
                const userMap = userData.reduce((acc, user) => {
                    acc[user.userId] = {
                        displayName: user.displayName,
                        avatar: user.avatar 
                    };
                    return acc;
                }, {});

                // Set the user map state
                setUserMap(userMap);
            } catch (error) {
                console.error("Error fetching draft picks or user data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="p-4">
                <h1 className="text-5xl text-center font-comicSans">Gridiron Grand Gambit Gala</h1>
            </div>
            {/* Pass draftPicks and userMap to DraftPicks */}
            <Tabs draftPicks={draftPicks} userData={userMap}/>
        </div>
    );
}
