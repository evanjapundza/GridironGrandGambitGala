import React, { useEffect } from "react";
import { fetchDraftPicks, fetchUser } from "../../Sleeper-API-Service";

export default function Home() {

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
