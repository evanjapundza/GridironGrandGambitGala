import React from "react";

export default function Standings() {

    return (
        <div>
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src="/placeholder.svg"
                        alt="Fantasy Football League"
                        width="32"
                        height="32"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    />
                    <h1 className="text-2xl font-bold">Gridiron Grand Gambit Gala</h1>
                </div>
                <nav className="flex items-center gap-4">
                    <a href="/" className="text-sm font-medium hover:text-primary-foreground/80">
                        Home
                    </a>
                    <a href="/standings" className="text-sm font-medium hover:text-primary-foreground/80">
                        Standings
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-primary-foreground/80">
                        Player Stats
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-primary-foreground/80">
                        Matchups
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-primary-foreground/80">
                        Power Rankings
                    </a>
                    <a href="/drafthistory" className="text-sm font-medium hover:text-primary-foreground/80">
                        Draft History
                    </a>
                </nav>
            </header>
        </div>
    );
}
