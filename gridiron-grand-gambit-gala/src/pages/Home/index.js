import React, { useState, useEffect } from "react";
import { fetchDraftPicks, fetchUser } from "../../Sleeper-API-Service";

export default function Home() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the draft picks first
                const fetchedDraftPicks = await fetchDraftPicks();

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
            } catch (error) {
                console.error("Error fetching draft picks or user data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">Gridiron Grand Gambit Gala</h1>
                </div>
                <nav className="flex items-center gap-4">
                    <a href="/standings" className="text-sm font-medium hover:text-primary-foreground/80">
                        Standings
                    </a>
                    <a href="/playerstats" className="text-sm font-medium hover:text-primary-foreground/80">
                        Player Stats
                    </a>
                    <a href="/matchups" className="text-sm font-medium hover:text-primary-foreground/80">
                        Matchups
                    </a>
                    <a href="/powerrankings" className="text-sm font-medium hover:text-primary-foreground/80">
                        Power Rankings
                    </a>
                    <a href="/drafthistory" className="text-sm font-medium hover:text-primary-foreground/80">
                        Draft History
                    </a>
                </nav>
            </header>

            <div className="flex w-full items-center justify-center">
                <img src="/playersimages/markandrews.png" alt="mark" className="h-[200px] w-[500px]" />
            </div>

        </div>
    );
}
